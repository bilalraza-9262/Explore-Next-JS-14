import React from 'react'
// import { notFound } from 'next/navigation';
import notfound from './not-found'; 
const page = ({ params }: {
	params: {
		productid: string;
		reviewid: string
	}
}) => {

	if (parseInt(params.reviewid)>1001) {
		// notfound() // this not found given us a next js
		return(notfound())
	} else {
		return (
			<div>
				Review {params.reviewid} for Product {params.productid}
			</div>
		)	
	}
	
}

export default page
