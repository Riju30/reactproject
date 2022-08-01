import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const STATUSES = Object.freeze({
    IDLE:"idle",
    LOADING:"loading",
    ERROR:"error"
})


const Allproduct = createSlice({
        name:"allproduct",
        initialState:{
            data:[],
            status: STATUSES.IDLE
        },
        reducers:{
            categoryData(state,action){
                state.data = action.payload
                state.status = STATUSES.IDLE
            }
           
        },
        extraReducers:(builder)=>{
            builder
            .addCase(fetchAllProduct.pending , (state,action)=>{
                state.status = STATUSES.LOADING
            })
            .addCase(fetchAllProduct.fulfilled , (state,action)=>{
                state.data= action.payload
                state.status = STATUSES.IDLE
            })
            .addCase(fetchAllProduct.rejected, (state,action)=>{
                state.status = STATUSES.ERROR
            })
        }
})

export const {categoryData} = Allproduct.actions
export default Allproduct.reducer

export const fetchAllProduct = createAsyncThunk("allproduct/fetch", async()=>{
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()
    return data
})