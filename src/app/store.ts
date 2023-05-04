import { configureStore } from '@reduxjs/toolkit'

import keyboardSlice from '../features/keyboard/keyboardSlice'

export default configureStore({
  reducer: {
    keyboard: keyboardSlice
  }
})