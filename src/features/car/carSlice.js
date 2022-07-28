import { createSlice } from '@reduxjs/toolkit';

var initialState ={
cars: ["Model S","Model 3","Model X","Model Y"]

}

const carSlice =createSlice({
    name:"car",
    initialState,
    reducer: {}
})


export const selectCars = state => state.car.cars
export default carSlice.reducer;
console.log(selectCars);