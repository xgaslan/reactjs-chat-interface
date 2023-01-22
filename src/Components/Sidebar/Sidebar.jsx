// React
import React from "react"

// Style
import SidebarCSS from "./Sidebar.module.css"

// Component
import SidebarSearch from "./Search/Search"
import SidebarContacts from "./Contacts/Contacts"

export default function Sidebar() {
	return (
		<div className={SidebarCSS.sidebar}>
			{/* <SidebarSearch />
			<SidebarContacts /> */}
		</div>
	)
}
