import { createSlice } from '@reduxjs/toolkit'
import { MessageGettingState, FetchingStatus } from './types'

export const messageGettingInitialState: MessageGettingState = {
  status: undefined
}

export const messageGettingSlice = createSlice({
  name: 'messageGetting',
  initialState: messageGettingInitialState,
  reducers: {
    inProgress: state => { return { ...state, status: FetchingStatus.IN_PROGRESS } },
    errored: state => { return { ...state, status: FetchingStatus.ERROR } },
    success: state => { return { ...state, status: FetchingStatus.SUCCESS } }
  }
})
