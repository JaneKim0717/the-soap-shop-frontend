import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
	name: "products",
	initialState: { entities: [], reviews: [] },
	reducers: {
		productFiltered(state, action) {
			state.entities = [action.payload]
		},
	},
})

export const { productFiltered } =
	productsSlice.actions
export default productsSlice.reducer
