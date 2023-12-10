import { createSlice } from "@reduxjs/toolkit"

import { RootState } from "../../store"

export interface StepType {
  StepStage: number
  MetaData: any
  InputPrompts: any
  Prompt: string
  // LinkAccounts: any
  // Skills: boolean
  // ThankYou: any
}

const initialState: StepType = {
  StepStage: 1,
  MetaData: "",
  InputPrompts: "",
  Prompt: "",
  // LinkAccounts: "",
  // Skills: false,
  // ThankYou: "",
}

const stepSlice = createSlice({
  name: "stepState",
  initialState,
  reducers: {
    stepStage: (state, action) => {
      state.StepStage = action.payload
    },
    metaData: (state, action) => {
      state.MetaData = action.payload
    },
    inputPrompts: (state, action) => {
      state.InputPrompts = action.payload
    },
    prompts: (state, action) => {
      state.Prompt = action.payload
    },
    resetSteps: () => {
      return initialState
    },
    // linkAccounts: (state, action) => {
    //   state.LinkAccounts = action.payload
    // },
    // skills: (state, action) => {
    //   state.Skills = action.payload
    // },
    // thankYou: (state, action) => {
    //   state.ThankYou = action.payload
    // },
  },
})

export const {
  stepStage,
  metaData,
  inputPrompts,
  prompts,
  resetSteps,
  // linkAccounts,
  // skills,
  // thankYou,
} = stepSlice.actions
export const selectAllSteps = (state: RootState) => state.stepState
export default stepSlice.reducer
