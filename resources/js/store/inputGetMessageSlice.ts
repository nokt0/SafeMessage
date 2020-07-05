import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InputGetMessageState } from './types'

export const inputGetMessageInitialState: InputGetMessageState = {
  password: ''
}

export const inputGetMessageSlice = createSlice({
  name: 'inputGetMessage',
  initialState: inputGetMessageInitialState,
  reducers: {
    setPassword: (state, action: PayloadAction<string>) => {
      return { ...state, password: action.payload }
    }
  }
})
