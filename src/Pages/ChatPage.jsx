// React
import React from "react"

// Style
import ChatPageCSS from "./ChatPage.module.css"

// Component
import Sidebar from "./../Components/Sidebar/Sidebar"
import Content from "../Components/Content/Content"

export default function ChatPage() {
	return (
		<div className={ChatPageCSS.chat}>
			<Sidebar />
			<Content />
		</div>
	)
}
