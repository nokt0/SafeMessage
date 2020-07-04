import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FetchingStatus, MessageGettingState} from './types'

export const messageGettingInitialState: MessageGettingState = {
    status: FetchingStatus.NOT_STARTED,
    errorMsg: ''
}

export const messageGettingSlice = createSlice({
    name: 'messageGetting',
    initialState: messageGettingInitialState,
    reducers: {
        inProgress: state => {
            return {...state, status: FetchingStatus.IN_PROGRESS}
        },
        errored: (state,action: PayloadAction<string>) => {
            return {...state, status: FetchingStatus.ERROR, errorMsg: action.payload}
        },
        success: state => {
            return {...state, status: FetchingStatus.SUCCESS}
        },
        notStarted: (state, ) => {
            return {...state, status: FetchingStatus.NOT_STARTED}
        }
    }
})
