import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InputPostMessageState } from './types'

export const inputPostMessageInitialState: InputPostMessageState = {
  counter: -1,
  expires: -1,
  message: '',
  password: ''
}

export const inputPostMessageSlice = createSlice({
  name: 'inputPostMessage',
  initialState: inputPostMessageInitialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      return { ...state, counter: action.payload }
    },
    setExpires: (state, action: PayloadAction<number>) => {
      return { ...state, expires: action.payload }
    },
    setMessage: (state, action: PayloadAction<string>) => {
      return { ...state, message: action.payload }
    },
    setPassword: (state, action: PayloadAction<string>) => {
      return { ...state, password: action.payload }
    }
  }
})
