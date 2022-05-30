import { ROOMS } from "../data/ROOMS";
import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    roomsArray: ROOMS
}

const roomsSlice = createSlice({
    name:'rooms',
    initialState

})

export const roomsReducer = roomsSlice.reducer

export const selectAllRooms =(state)=>{
    return state.rooms.roomsArray
}

