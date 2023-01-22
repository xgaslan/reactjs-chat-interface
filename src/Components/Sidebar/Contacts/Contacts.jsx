// React
import React from "react"
import Contact from "./Contact/Contact"

// Style
import ContactsCSS from "./Contacts.module.css"
import { useState } from "react"

export default function Contacts() {
	const dummyMessageDatas = [
		{
			id: 1,
			imageUrl: "https://i.pravatar.cc/150?img=1",
			name: "Ahmet 1",
			message: "Merhaba Ben Ahmet 1",
			notification: [
				{
					id: 1,
					message: "Merhaba Ben Ahmet 1",
					time: "12:00",
				},
				{
					id: 2,
					message: "Merhaba Ben Ahmet 1",
					time: "12:00",
				},
			],
		},
		{
			id: 2,
			imageUrl: "https://i.pravatar.cc/150?img=2",
			name: "Mehmet 2",
			message: "Merhaba Ben Mehmet 2",
			notification: [],
		},
		{
			id: 3,
			imageUrl: "https://i.pravatar.cc/150?img=3",
			name: "Ali 3",
			message: "Merhaba Ben Ali 3",
			notification: [],
		},
		{
			id: 4,
			imageUrl: "https://i.pravatar.cc/150?img=4",
			name: "Veli 4",
			message: "Merhaba Ben Veli 4",
			notification: [],
		},
		{
			id: 5,
			imageUrl: "https://i.pravatar.cc/150?img=5",
			name: "Ayşe 5",
			message: "Merhaba Ben Ayşe 5",
			notification: [],
		},
		{
			id: 6,
			imageUrl: "https://i.pravatar.cc/150?img=6",
			name: "Fatma 6",
			message: "Merhaba Ben Fatma 6",
			notification: [],
		},
		{
			id: 7,
			imageUrl: "https://i.pravatar.cc/150?img=7",
			name: "Kemal 7",
			message: "Merhaba Ben Kemal 7",
			notification: [
				{
					id: 1,
					message: "Merhaba Ben Ahmet 1",
					time: "12:00",
				},
			],
		},
		{
			id: 8,
			imageUrl: "https://i.pravatar.cc/150?img=8",
			name: "Selim 8",
			message: "Merhaba Ben Selim 8",
			notification: [],
		},
		{
			id: 9,
			imageUrl: "https://i.pravatar.cc/150?img=9",
			name: "Zeynep 9",
			message: "Merhaba Ben Zeynep 9",
			notification: [],
		},
		{
			id: 10,
			imageUrl: "https://i.pravatar.cc/150?img=10",
			name: "Hüseyin 10",
			message: "Merhaba Ben Hüseyin 10",
			notification: [],
		},
		{
			id: 11,
			imageUrl: "https://i.pravatar.cc/150?img=11",
			name: "Hakan 11",
			message: "Merhaba Ben Hakan 11",
			notification: [],
		},
		{
			id: 12,
			imageUrl: "https://i.pravatar.cc/150?img=12",
			name: "Hüseyin 12",
			message: "Merhaba Ben Hüseyin 12",
			notification: [],
		},
		{
			id: 13,
			imageUrl: "https://i.pravatar.cc/150?img=13",
			name: "Hakan 13",
			message: "Merhaba Ben Hakan 13",
			notification: [],
		},
		{
			id: 14,
			imageUrl: "https://i.pravatar.cc/150?img=14",
			name: "Hüseyin 14",
			message: "Merhaba Ben Hüseyin 14",
			notification: [],
		},
		{
			id: 15,
			imageUrl: "https://i.pravatar.cc/150?img=15",
			name: "Hakan 15",
			message: "Merhaba Ben Hakan 15",
			notification: [],
		},
		{
			id: 16,
			imageUrl: "https://i.pravatar.cc/150?img=16",
			name: "Hüseyin 16",
			message: "Merhaba Ben Hüseyin 16",
			notification: [],
		},
		{
			id: 17,
			imageUrl: "https://i.pravatar.cc/150?img=17",
			name: "Hakan 17",
			message: "Merhaba Ben Hakan 17",
			notification: [],
		},
		{
			id: 18,
			imageUrl: "https://i.pravatar.cc/150?img=18",
			name: "Hüseyin 18",
			message: "Merhaba Ben Hüseyin 18",
			notification: [],
		},
		{
			id: 19,
			imageUrl: "https://i.pravatar.cc/150?img=19",
			name: "Hakan 19",
			message: "Merhaba Ben Hakan 19",
			notification: [],
		},
		{
			id: 20,
			imageUrl: "https://i.pravatar.cc/150?img=20",
			name: "Hüseyin 20",
			message: "Merhaba Ben Hüseyin 20",
			notification: [],
		},
		{
			id: 21,
			imageUrl: "https://i.pravatar.cc/150?img=21",
			name: "Hakan 21",
			message: "Merhaba Ben Hakan 21",
			notification: [],
		},
		{
			id: 22,
			imageUrl: "https://i.pravatar.cc/150?img=22",
			name: "Hüseyin 22",
			message: "Merhaba Ben Hüseyin 22",
			notification: [],
		},
		{
			id: 23,
			imageUrl: "https://i.pravatar.cc/150?img=23",
			name: "Hakan 23",
			message: "Merhaba Ben Hakan 23",
			notification: [],
		},
		{
			id: 24,
			imageUrl: "https://i.pravatar.cc/150?img=24",
			name: "Hüseyin 24",
			message: "Merhaba Ben Hüseyin 24",
			notification: [],
		},
		{
			id: 25,
			imageUrl: "https://i.pravatar.cc/150?img=25",
			name: "Hakan 25",
			message: "Merhaba Ben Hakan 25",
			notification: [],
		},
	]

	const [selectedId, setSelectedId] = useState(null)

	return (
		<div className={ContactsCSS.contacts}>
			<ul>
				{dummyMessageDatas.map((message) => {
					return (
						<Contact
							key={message?.id}
							id={message?.id}
							imageUrl={message?.imageUrl}
							name={message?.name}
							message={message?.message}
							setSelectedId={setSelectedId}
							activeId={selectedId}
							notificationCount={message?.notification?.length}
						/>
					)
				})}
			</ul>
		</div>
	)
}
