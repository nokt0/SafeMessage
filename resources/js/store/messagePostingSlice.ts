import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MessagePostingState, FetchingStatus} from './types'

export const messagePostingInitialState: MessagePostingState = {
    status: FetchingStatus.NOT_STARTED,
    postedId: '',
    errorMsg: ''
}

export const messagePostingSlice = createSlice({
    name: 'messagePosting',
    initialState: messagePostingInitialState,
    reducers: {
        inProgress: state => {
            return {...state, status: FetchingStatus.IN_PROGRESS}
        },
        errored: (state, action: PayloadAction<string>) => {
            return {...state, status: FetchingStatus.ERROR, errorMsg: action.payload}
        },
        success: (state,action:PayloadAction<string>) => {
            return {...state, status: FetchingStatus.SUCCESS, postedId: action.payload}
        },
        notStarted: state => {
            return {...state, status: FetchingStatus.NOT_STARTED}
        }
    }
})

export const {
    inProgress,
    errored,
    success,
    notStarted
} = messagePostingSlice.actions
