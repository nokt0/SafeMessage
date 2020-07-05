import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { inputGetMessageSlice } from './inputGetMessageSlice'
import { inputPostMessageSlice } from './inputPostMessageSlice'
import { messageDataSlice } from './messageDataSlice'
import { messageGettingSlice } from './messageGettingSlice'
import { messagePostingSlice } from './messagePostingSlice'

const middleware = getDefaultMiddleware({
  immutableCheck: true,
  serializableCheck: true,
  thunk: true
})

const store = configureStore({
  reducer: {
    inputGetMessage: inputGetMessageSlice.reducer,
    inputPostMessage: inputPostMessageSlice.reducer,
    messageData: messageDataSlice.reducer,
    messageGetting: messageGettingSlice.reducer,
    messagePosting: messagePostingSlice.reducer
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
