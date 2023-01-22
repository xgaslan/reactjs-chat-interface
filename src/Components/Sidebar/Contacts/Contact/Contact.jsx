import ContactCSS from "./Contact.module.css"

export default function Contact({
	id,
	imageUrl,
	name,
	message,
	setSelectedId,
	activeId,
	notificationCount = 0,
}) {
	function handleOnItemClick() {
		setSelectedId(id)
	}

	return (
		<li
			className={
				id === activeId
					? ContactCSS.contact_item_container_active
					: null
			}
			onClick={handleOnItemClick}
		>
			<div
				className={
					id === activeId
						? ContactCSS.contact_container_active
						: ContactCSS.contact_container
				}
				key={id}
			>
				<img
					className={ContactCSS.image}
					src={imageUrl}
					alt="contact-img"
				/>
				<div className={ContactCSS.contact}>
					<div className={ContactCSS.contact_name}>{name}</div>
					<div className={ContactCSS.contact_message}>{message}</div>
				</div>
				{notificationCount > 0 ? (
					<div className={ContactCSS.notification}>
						{notificationCount}
					</div>
				) : null}
			</div>
		</li>
	)
}
