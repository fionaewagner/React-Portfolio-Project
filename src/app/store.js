import { configureStore } from '@reduxjs/toolkit';
import { ammenitiesReducer } from '../slices/ammenitiesSlice';
import { roomsReducer } from '../slices/roomsSlice';



export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    ammenities: ammenitiesReducer
    
  },
});
