import { configureStore } from '@reduxjs/toolkit'

import keyboardSlice from '../features/keyboard/keyboardSlice'
import selectedSetsSlice from '../features/selectedSets/selectedSetsSlice'

export default configureStore({
  reducer: {
    keyboard: keyboardSlice,
    selectedSet: selectedSetsSlice
  }
})