import { createSlice } from '@reduxjs/toolkit'
import { assistantEmptyState } from '../../constants/assistant.constants'

export const assistantSlice = createSlice({
  name: 'assistant',
  initialState: assistantEmptyState,
  reducers: {
    createAssistant: (state, action) => action.payload,
    modifyAssistant: (state, action) => ({ ...state, ...action.payload }),
    resetAssistant: () => assistantEmptyState,
  },
})

export const { increment, createAssistant, modifyAssistant, resetAssistant } =
  assistantSlice.actions

export default assistantSlice.reducer
