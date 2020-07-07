import {
  InputGetMessageState,
  InputPostMessageState,
  MessageCreated,
  MessageDataState,
  NOT_ENOUGH_PARAMS,
  ServerError
} from './types'
import { messagePostingSlice } from './messagePostingSlice'
import { messageDataSlice } from './messageDataSlice'
import { messageGettingSlice } from './messageGettingSlice'
import { uiDataSlice } from './UiDataSlice'
import { setCookie } from './cookieHelpers'

export function postMessageThunk (payload: InputPostMessageState) {
  return async dispatch => {
    dispatch(messagePostingSlice.actions.notStarted())
    if (!(payload?.password && payload?.text && payload?.expires && payload.counter)) {
      dispatch(messagePostingSlice.actions.errored({ error: 'Not enough params', errorConst: NOT_ENOUGH_PARAMS }))
    }
    if (window.csrf_token || process.env.NODE_ENV === 'test') {
      const csrfToken = window.csrf_token
      const { text, password, expires, counter } = payload
      dispatch(messagePostingSlice.actions.inProgress())
      return fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({
          text: text,
          password: password,
          expires: expires,
          counter: counter
        }),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        }
      })
        .then(response => {
          if (response.status === 201) {
            return response.json() as unknown as MessageCreated
          }
          throw response.json()
        })
        .then(json => {
          dispatch(messagePostingSlice.actions.success(json.publicId))
          dispatch(uiDataSlice.actions.showLinkModal(true))
          return json
        })
        .catch((json) => {
          return json.then((error) => {
            dispatch(messagePostingSlice.actions.errored({
              error: error.error,
              errorConst: error.errorConst
            } as ServerError))
          })
        })
    }
    return dispatch(messagePostingSlice.actions.errored({
      error: 'csrf token not found',
      errorConst: 'CSRF_TOKEN'
    } as ServerError))
  }
}

export function getMessageThunk (payload: InputGetMessageState & { id: string }) {
  return async dispatch => {
    dispatch(messageGettingSlice.actions.notStarted())
    if (!(payload?.id && payload?.password)) {
      return dispatch(messageGettingSlice.actions.errored({
        error: 'Not enough params',
        errorConst: NOT_ENOUGH_PARAMS
      }))
    }
    if (window.csrf_token || process.env.NODE_ENV === 'test') {
      const csrfToken = window.csrf_token
      const { id, password } = payload
      dispatch(messageGettingSlice.actions.inProgress())
      return await fetch(`/api/message/${id}`, {
        method: 'POST',
        body: JSON.stringify({
          password: password
        }),
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        }
      })
        .then(response => {
          if (response.status === 200) {
            return response.json() as unknown as MessageDataState
          }
          throw response.json()
        })
        .then(json => {
          dispatch(messageDataSlice.actions.updateCounter(json.counter))
          dispatch(messageDataSlice.actions.updateExpires(json.expires))
          dispatch(messageDataSlice.actions.updateImage(json.img))
          dispatch(messageGettingSlice.actions.success())
          setCookie('messageLastPath', decodeURI(window.location.href), undefined)
          setCookie('messageLastTime', decodeURI(new Date().toString()), undefined)
          return json as MessageDataState
        })
        .catch((json) => {
          return json.then((error) => {
            dispatch(messageGettingSlice.actions.errored({
              error: error.error,
              errorConst: error.errorConst
            } as ServerError))
          })
        })
    }
    return dispatch(messageGettingSlice.actions.errored({
      error: 'csrf token not found',
      errorConst: 'CSRF_TOKEN'
    } as ServerError))
  }
}
