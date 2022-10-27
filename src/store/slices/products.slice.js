import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: "products",
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})

export const {setProductsGlobal} = productsSlice.actions

export default productsSlice.reducer

export const getProducts = () => (dispatch) => {
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res => dispatch(setProductsGlobal(res.data.data.products)))
        .catch(err => console.log(err))
}