import { createSlice } from '@reduxjs/toolkit'
import { MessagePostingState, FetchingStatus } from './types'

export const messagePostingInitialState: MessagePostingState = {
  status: undefined
}

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
