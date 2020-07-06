import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UiDataState} from "./types";

const uiDataInitialState: UiDataState = {
    showPasswordModal: true,
    showLinkModal: false
}

export const uiDataSlice = createSlice({
    name: 'uiData',
    initialState: uiDataInitialState,
    reducers: {
        showLinkModal: (state, action: PayloadAction<boolean>) => ({...state, showLinkModal: action.payload}),
        showPasswordModal: (state, action: PayloadAction<boolean>) => ({...state, showPasswordModal: action.payload})
    }
})
