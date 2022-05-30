import { AMMENITIES } from "../data/AMMENITIES"
import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    ammenitiesArray: AMMENITIES
}

const ammenitiesSlice = createSlice({
    name:'ammenities',
    initialState

})

export const ammenitiesReducer = ammenitiesSlice.reducer

export const selectAllAmmenities =(state)=>{
    return state.ammenities.ammenitiesArray
}