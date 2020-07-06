import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchingStatus, MessageGettingState, ServerError } from './types'

export const messageGettingInitialState: MessageGettingState = {
  status: FetchingStatus.NOT_STARTED,
  errorMsg: '',
  errorConst: ''
}

export const messageGettingSlice = createSlice({
  name: 'messageGetting',
  initialState: messageGettingInitialState,
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
    success: state => {
      return { ...state, status: FetchingStatus.SUCCESS }
    },
    notStarted: (state) => {
      return { ...state, status: FetchingStatus.NOT_STARTED }
    }
  }
})
