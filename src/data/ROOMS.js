import KingRoom from '../imgs/hotel-bed-king.avif'
import QueensRoom from '../imgs/hotel-bed-queens.avif'
import MasterSuite from '../imgs/hotel-bed-suite.avif'

export const ROOMS = [
    {
        id: 0,
        name: "King Suite",
        image: KingRoom,
        description: `Our Deluxe King Rooms feature a single King size bed and bathroom
        with a shower-bathtub combo. Complimentary wi-fi and cable is provided.
        Rooms with East and West facing views are available.`
    },
    {
        id: 1,
        name: "Queens Suite",
        image: QueensRoom,
        description: `Our Deluxe Double Queen Rooms feature two Queen sized beds and bathroom
        with a shower/bathtub combo. Complimentary wi-fi and cable is provided.
        Rooms with East and West facing views are available.`
    },

    {
        id: 2,
        name: "Master Suite",
        image: MasterSuite,
        description: `Our Master Suite Rooms feature a single king sized bed, 
        bathroom with bath/shower combo, kitchenette with mini-fridge 
        and induction stovetop, and a comfortable living area. 
        Complimentary wi-fi and cable is provided.
        Rooms with East and West facing views are available.`
    },

]