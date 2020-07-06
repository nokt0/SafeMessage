import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchingStatus, MessagePostingState, ServerError } from './types'

export const messagePostingInitialState: MessagePostingState = {
  status: FetchingStatus.NOT_STARTED,
  postedId: '',
  errorMsg: '',
  errorConst: ''
}

export const messagePostingSlice = createSlice({
  name: 'messagePosting',
  initialState: messagePostingInitialState,
  reducers: {
    inProgress: state => {
      return { ...state, status: FetchingStatus.IN_PROGRESS }
    },
    errored: (state, action: PayloadAction<ServerError>) => {
      return {
        ...state,
        status: FetchingStatus.ERROR,
        errorMsg: action.payload.error,
        errorConst: action.payload.errorConst
      }
    },
    success: (state, action: PayloadAction<string>) => {
      return { ...state, status: FetchingStatus.SUCCESS, postedId: action.payload }
    },
    notStarted: state => {
      return { ...state, status: FetchingStatus.NOT_STARTED }
    }
  }
})
