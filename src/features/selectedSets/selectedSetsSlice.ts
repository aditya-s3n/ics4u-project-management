import { createSlice } from '@reduxjs/toolkit'

const selectedSetsSlice = createSlice({
    name: 'selectedSets',
    initialState: {
        set1: false,
        set2: false,
        set3: false,
        set4: false
    },
    reducers: {
        toggleSet: (state, newSelected) => {
            const setVar = newSelected.payload;

            switch (setVar) {
                case 1:
                    state.set1 = !(state.set1);
                    break;

                case 2:
                    state.set2 = !(state.set2);
                    break;

                case 3:
                    state.set3 = !(state.set3);
                    break;

                case 4:
                    state.set4 = !(state.set4);
                    break;
            
                default:
                    break;
            }
        }
    }
})
  
// Action creators are generated for each case reducer function
export const { toggleSet } = selectedSetsSlice.actions
export default selectedSetsSlice.reducer;