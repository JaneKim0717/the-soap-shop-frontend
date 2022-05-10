import { useContext } from "react"
import {ProductsContext} from "../context/ProductsContext"
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterWrap = styled.div`
  margin: 20px;

`;

const FilterText = styled.span`
  font-size: 15px;
  font-weight: 600;
	margin-left: 120px;
  margin-right: 5px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
	width: 200px;
	border: 1px solid rgba(0, 0, 0, 0.125);

`;
const Option = styled.option`
	color: black;
	background: white;
	font-weight: small;
	display: flex;
	white-space: pre;
	min-height: 20px;
	padding: 0px 2px 1px;
`;

function Filter() {

	const { handleFilterChange } = useContext(ProductsContext)


	return (
		<FilterContainer>
			<FilterWrap>
				<FilterText>FILTER CATEGORY:</FilterText>
				<Select onChange={handleFilterChange}>
					<Option value="0">ALL PRODUCTS</Option>
					<Option value="1">BODY + FACE BARS</Option>
					<Option value="2">CANDLES</Option>
					<Option value="3">BATH BOMBS</Option>
					<Option value="4">BATH SALTS</Option>
					<Option value="5">GIFT SETS</Option>
					<Option value="6">ROOM + LINEN SPRAYS</Option>
				</Select>
			</FilterWrap>
		</FilterContainer>

	)
}

export default Filter
