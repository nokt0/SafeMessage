import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { MessagePostingState, FetchingStatus, InputPostMessageState } from './types'

export const messagePostingInitialState: MessagePostingState = {
  status: undefined
}

export const postMessageThunk = createAsyncThunk('messagePosting/postMessage', async (payload: InputPostMessageState) => {
  // @ts-ignore
  const csrfToken = document.head.querySelector('[name~=csrf-token][content]').content
  const response = fetch('/message', {
    method: 'POST',
    body: {
      message: payload.message,
      password: payload.password
    },
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    }
  })
})

export const messagePostingSlice = createSlice({
  name: 'messagePosting',
  initialState: messagePostingInitialState,
  reducers: {
    inProgress: state => {
      return { ...state, status: FetchingStatus.IN_PROGRESS }
    },
    errored: state => {
      return { ...state, status: FetchingStatus.ERROR }
    },
    success: state => {
      return { ...state, status: FetchingStatus.SUCCESS }
    }
  }
})
