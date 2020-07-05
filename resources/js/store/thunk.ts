import {InputGetMessageState, InputPostMessageState, MessageCreated, MessageDataState, ServerError} from "./types";
import {messagePostingSlice} from "./messagePostingSlice";
import {messageDataSlice} from "./messageDataSlice";
import {messageGettingSlice} from "./messageGettingSlice";

export function postMessageThunk(payload:InputPostMessageState) {
    return async dispatch => {
        dispatch(messagePostingSlice.actions.notStarted())
        if (window['csrf_token'] || process.env.NODE_ENV === 'test') {
            const csrfToken = window['csrf_token'];
            const {message, password, expires, counter} = payload;
            dispatch(messagePostingSlice.actions.inProgress())
            return fetch('/message', {
                method: 'POST',
                body: JSON.stringify({
                    message: message,
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
                        return response.json() as unknown as MessageCreated;
                    }
                    const json = response.json() as unknown as ServerError
                    throw new Error(json.error);
                })
                .then(json => {
                    dispatch(messagePostingSlice.actions.success(json.publicId))
                    return json as MessageCreated
                })
                .catch(e => {
                    dispatch(messagePostingSlice.actions.errored(e.message))
                    return {error: e.toString()} as ServerError
                })
        }
       return dispatch(messagePostingSlice.actions.errored('csrf token not found'))
    }
}

export function getMessageThunk(payload: InputGetMessageState & {id:string}) {
    return async dispatch => {
        dispatch(messageGettingSlice.actions.notStarted())
        if (window['csrf_token'] || process.env.NODE_ENV === 'test') {
            const csrfToken = window['csrf_token'];
            const {id, password} = payload;
            dispatch(messageGettingSlice.actions.inProgress())
            return fetch(`/message/${id}`, {
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
                    if (response.status === 201) {
                        return response.json() as unknown as MessageDataState
                    }
                    const json = response.json() as unknown as ServerError
                    throw new Error(json.error);
                })
                .then(json => {
                    dispatch(messageDataSlice.actions.updateCounter(json.counter))
                    dispatch(messageDataSlice.actions.updateExpires(json.expires))
                    dispatch(messageDataSlice.actions.updateImage(json.image))
                    dispatch(messagePostingSlice.actions.success())
                    return json as MessageDataState
                })
                .catch(e => {
                    dispatch(messageGettingSlice.actions.errored(e.message))
                    return {error: e.toString()} as ServerError
                })
        }
        return dispatch(messageGettingSlice.actions.errored('csrf token not found'))
    }
}
