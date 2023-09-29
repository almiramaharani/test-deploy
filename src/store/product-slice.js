import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        numberProduct: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        category: "Doe",
        productFreshnessRadio: "Doe",
        price: "Doe",
        image: "Doe",
        addDesc: "Doe",
    },
]

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                ...action.payload,
            }
            state.push(newProduct);
        },
        handleDelete: (state, action) => {
            const filteredProduct = state.filter((product) => product.numberProduct !== action.payload);
            return filteredProduct;
        },
        handleEdit: (state, action) => {
            const productIndex = state.findIndex(
                (product) => product.numberProduct === action.payload.numberProduct
            );

            if (productIndex !== -1) {
                const editedProduct = { ...state[productIndex] };

                if (action.payload.productName) {
                    editedProduct.productName = action.payload.productName;
                }
                if (action.payload.price) {
                    editedProduct.price = action.payload.price;
                }
                if (action.payload.image) {
                    editedProduct.image = action.payload.image;
                }

                state[productIndex] = editedProduct;
                alert("Successfully edited the product");
            }
        }
    }
});

export const selectProduct = (state) => state.product;
export const { addProduct, handleDelete, handleEdit } = productSlice.actions; 
export default productSlice.reducer;