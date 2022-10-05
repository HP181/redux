import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice"

const Store = configureStore({
    reducer : {
           counterReducer
    }
})

export default Store