import React from 'react'
import { Metadata } from 'next'

interface Iprops {
	params: {
		productid: string
	}
}
export const generateMetadata = async ({ params }: Iprops): Promise<Metadata> => {
	// const title = await new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		resolve(params.productid)
	// 	}, 1000);
	// })

	return {
		title: `Product ${params.productid}`
	}
}
const page = ({ params }: Iprops) => {
	return (
		<div>
			This is Product {params.productid}
		</div>
	)
}

export default page
