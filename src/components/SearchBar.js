import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Filter from "./Filter"

const SearchBar = ({ search, setSearch }) => {
	return (
		<Container style={{ marginTop: "75px" }}>
			<Row>
				<Col sm={4}>
					<Filter />
				</Col>
				<Col>
					<input
						className="form-control"
						type="text"
						placeholder="Search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						aria-label="Search"
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default SearchBar