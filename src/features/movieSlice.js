import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    movies:[
        { id:1, name:"Avengers", price:100},
        { id:2, name:"Ironman", price:120},
        { id:3, name:"spiderman", price :840},
    ]
}
const movieSlice = createSlice ({
    name :"movies",
    initialState,
    reducers:{},
})
export default movieSlice.reducer;