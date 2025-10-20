// import React from 'react'
// "use client"

import ProductsCard from "@/components/products/ProductsCard"

// server actions

const ProductsPage = async () => {
    const fetchProducts = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`)
            const data = await response.json()
            return data.products
        } catch (error) {
            console.log(error)
        }
    }
    const products = await fetchProducts()
    return (
        <div>
            {
                products?.map((product, idx) => (
                    <ProductsCard title={product.title} image={product.image} price={product.price} category={product.category} />
                ))
            }
        </div>
    )
}

export default ProductsPage