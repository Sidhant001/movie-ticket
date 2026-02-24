import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    movies:[
        { id:1, title:"Avengers", price:100},
        { id:2, title:"Ironman", price:120},
        { id:3, title:"spiderman", price :840},
    ]
}
const movieSlice = createSlice ({
    name :"movie",
    initialState,
    reducers:{},
})
export default movieSlice.reducer;