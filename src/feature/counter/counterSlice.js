import { createSlice } from "@reduxjs/toolkit";

const ininitialstate = {
    count:0
}

export const counterSlice = createSlice({
    name: "counter",
    ininitialstate,
    reducers: {
        increament: (state)=>{
            state.count += 1
        },

        decreament: (state)=> {
            state.count -= 1
        }
    }
})

export const {increament, decreament} = counterSlice.actions
export default counterSlice.reducer