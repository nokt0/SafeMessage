import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MessageDataState } from './types'

export const messageDataInitialState: MessageDataState = {
  counter: -1,
  expires: -1,
  image: ''
}

export const messageDataSlice = createSlice({
  name: 'messageData',
  initialState: messageDataInitialState,
  reducers: {
    updateCounter: (state, action: PayloadAction<number>) => {
      return { ...state, counter: action.payload }
    },
    updateExpires: (state, action: PayloadAction<number>) => {
      return { ...state, expires: action.payload }
    },
    updateImage: (state, action: PayloadAction<string>) => {
      return { ...state, image: action.payload }
    }
  }
})
