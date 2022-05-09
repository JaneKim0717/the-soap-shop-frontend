import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "./context/productsSlice"

const store = configureStore({
	reducer: {
		products: productsReducer,
	},
})

export default store
