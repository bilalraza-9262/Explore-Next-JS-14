import React from 'react'

const page = ({ params }: {
	params: {
		lessons: string[]
	}
}) => {
	const { lessons } = params;
	if (lessons?.length === 1) {
		return (
			<h1>
				It is the docs page for {lessons[0]}
			</h1>
		)
	} else if (lessons?.length === 2) {
		return (
			<h1>
				Here deine a {lessons[1]} concept in {lessons[0]}
			</h1>
		)
	} else if (lessons?.length > 2) {
		return (
			<h1>
				Not Found any Docs here😔
			</h1>
		)
	} else {
		return (
			<div>
				Welcome to the Docs Page
			</div>
		)
	}


}

export default page
