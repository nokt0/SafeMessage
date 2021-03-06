import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InputPostMessageState } from './types'

export const inputPostMessageInitialState: InputPostMessageState = {
  counter: -1,
  expires: -1,
  text: '',
  password: ''
}

export const inputPostMessageSlice = createSlice({
  name: 'inputPostMessage',
  initialState: inputPostMessageInitialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      return { ...state, counter: action.payload }
    },
    setExpires: {
      reducer: (state, action: PayloadAction<number>) => {
        return { ...state, expires: action.payload }
      },
      prepare: (payload: string) => {
        const date = Date.parse(payload)
        return {
          payload: date
        }
      }
    },
    setMessage: (state, action: PayloadAction<string>) => {
      return { ...state, text: action.payload }
    },
    setPassword: (state, action: PayloadAction<string>) => {
      return { ...state, password: action.payload }
    }
  }
})
