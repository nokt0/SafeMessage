import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UiDataState} from "./types";

const uiDataInitialState: UiDataState = {
    showLinkModal: false
}

export const uiDataSlice = createSlice({
    name: 'uiData',
    initialState: uiDataInitialState,
    reducers:{
        showLinkModal: (state,action:PayloadAction<boolean>) => ({showLinkModal:action.payload}),
        
    }
})
