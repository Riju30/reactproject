import Allproduct from "./product/Allproduct";
import ProductCategory from "./product/ProductCategory";
import AuthSlice from "./user/AuthSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const Store = configureStore({
    reducer:{
        allProduct: Allproduct,
        productCategory : ProductCategory,
        auth: AuthSlice,
    }
})