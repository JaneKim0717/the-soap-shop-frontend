import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
	name: "products",
	initialState: { products: [] },
	reducers: {
		productFiltered: (state, action) => {
			state.products = [action.payload]
		}
	},
})

export const { productFiltered } = productsSlice.actions

export default productsSlice.reducer
