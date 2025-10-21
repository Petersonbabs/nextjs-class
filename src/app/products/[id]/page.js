import React from 'react'

const SingleProductPage = async ({ params }) => {
    const { id } = await params
    console.log(id)
    return (
        <div>SingleProductPage</div>
    )
}

export default SingleProductPage