import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const PRO_CATE_STATUSES = Object.freeze({
    IDLE:"idle",
    LOADING:"loading",
    ERROR:"error"
})

const ProductCategory = createSlice({
    name:"category",
    initialState:{
        data:[],
        status: PRO_CATE_STATUSES.IDLE
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProductCategory.pending, (state,action)=>{
            state.status = PRO_CATE_STATUSES.LOADING
        })
        .addCase(fetchProductCategory.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = PRO_CATE_STATUSES.IDLE
        })
        .addCase(fetchProductCategory.rejected, (state,action)=>{
            state.status= PRO_CATE_STATUSES.ERROR
        })
    }
})

export default ProductCategory.reducer

export const fetchProductCategory = createAsyncThunk("product/category",async()=>{
    const res = await fetch("https://fakestoreapi.com/products/categories")
    const data = await res.json()
    return data
})