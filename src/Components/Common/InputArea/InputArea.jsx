import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import InputAreaCSS from "./InputArea.module.css"

export default function InputArea({
	type,
	placeholder,
	className,
	setValue,
	value,
	isDisabled = false,
	isReadOnly = false,
	hasIcon = false,
	icon = faSearch,
	onIconClick,
	maxLength = null,
	minLength = null,
}) {
	return (
		<React.Fragment>
			<input
				type={type ?? "text"}
				placeholder={placeholder ?? ""}
				className={
					className
						? hasIcon
							? `${className} ${InputAreaCSS.search_input}`
							: `${className} ${InputAreaCSS.search_input_without_icon}`
						: hasIcon
						? InputAreaCSS.search_input
						: InputAreaCSS.search_input_without_icon
				}
				setValue={setValue ?? null}
				value={value ?? ""}
				onChange={(text) =>
					setValue ? setValue(text.target.value) : null
				}
				disabled={isDisabled}
				readOnly={isReadOnly}
				minLength={minLength}
				maxLength={maxLength}
			/>
			{hasIcon ? (
				<div className={InputAreaCSS.search_icon_container}>
					<FontAwesomeIcon
						icon={icon}
						onClick={isDisabled ? () => {} : onIconClick}
						className={InputAreaCSS.search_icon}
					/>
				</div>
			) : (
				<React.Fragment />
			)}
		</React.Fragment>
	)
}
