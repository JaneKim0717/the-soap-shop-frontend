// import {productFiltered} from "../context/productsSlice"
// import { useDispatch } from "react-redux"
import { useContext } from "react"
import {ProductsContext} from "../context/ProductsContext"

function Filter() {
	// const dispatch = useDispatch()

	const { handleChange } = useContext(ProductsContext)


	return (
		<select onChange={handleChange}>
      <option value="0">ALL PRODUCTS</option>
			<option value="1">BODY + FACE BARS</option>
			<option value="2">CANDLES</option>
			<option value="3">BATH BOMBS</option>
			<option value="4">BATH SALTS</option>
			<option value="5">GIFT SETS</option>
		</select>
	)
}

export default Filter
