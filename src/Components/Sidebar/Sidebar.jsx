// React
import React from "react"

// Style
import SidebarCSS from "./Sidebar.module.css"

// Component
import SidebarContent from "./Content/Content"
import SidebarHeader from "./Header/Header"

export default function Sidebar() {
	return (
		<div>
			<SidebarHeader />
			<SidebarContent />
		</div>
	)
}
