// React
import React from "react"

// Style
import ContentCSS from "./Content.module.css"

// Component
import MessageContent from "./MessageContent/MessageContent";
import MessageForm from "./MessageForm/MessageForm";
import MessageHeader from './MessageHeader/MessageHeader';

export default function Content() {
	return <div className={ContentCSS.content}>
        {/* <MessageHeader/>
        <MessageContent/>
        <MessageForm/> */}
    </div>
}
