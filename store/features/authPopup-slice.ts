import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialState = {
    value: AuthPopupState
}

type AuthPopupState = {
    isOpen: boolean
}

const initialState = {
    value: {
        isOpen: false
    } as AuthPopupState,
} as initialState;

export const authPopup = createSlice({
    name: "authPopup",
    initialState: initialState,
    reducers: {
        rotateOpenAuth: (state, action: PayloadAction<boolean>) => {
            return {
                value: {
                    isOpen: action.payload
                }
            }
        }
    }
})

export const { rotateOpenAuth } = authPopup.actions;
export default authPopup.reducer;