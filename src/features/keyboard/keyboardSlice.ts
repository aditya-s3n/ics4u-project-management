import { createSlice } from '@reduxjs/toolkit'

const keyboardSlice = createSlice({
    name: 'keyboard',
    initialState: {
        key: "A" 
    },
    reducers: {
        changeKey: (state, newKey) => {
        state.key = newKey.payload
        }
    }
})
  
// Action creators are generated for each case reducer function
export const { changeKey } = keyboardSlice.actions
export default keyboardSlice.reducer;