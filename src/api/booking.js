import axios from 'axios'
import cors from 'cors';
const url =  'http://127.0.0.1:5000/booking'
const corsOptions = {
    origin: 'http://localhost:3000',
  };

export const createBooking= async(room, checkIn, checkOut)=>{
    try{
        const response = await axios.post(`${url}/book`,{
            room,
            check_in: checkIn,
            check_out: checkOut,
            user_id: sessionStorage.getItem("userId")
        })
        if(response){
            console.log(response.data)
        }

    }catch(err){
        console.log(err)
    }
}

export const getUserBookings=async()=>{
    try{
        const {data} = await axios.get(`${url}/allbookings?user_id=${sessionStorage.getItem("userId")}`)
        if(data){
            console.log(data)
        }
    }catch(err){
        console.log(err)
}
}