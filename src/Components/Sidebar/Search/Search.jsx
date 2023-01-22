// React
import React, { useState } from "react"

// Style
import SearchCSS from "./Search.module.css"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

// Common Component
import InputArea from "./../../Common/InputArea/InputArea"

export default function Search() {
	const [search, setSearch] = useState("")

	return (
		<div className={SearchCSS.search_container}>
			<InputArea
				type={"text"}
				placeholder={"Ara..."}
				setValue={setSearch}
				value={search}
				hasIcon={true}
				icon={faSearch}
			/>
		</div>
	)
}
