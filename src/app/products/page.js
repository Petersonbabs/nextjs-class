// import React from 'react'
// "use client"

import ProductsCard from "@/components/products/ProductsCard"
import { Suspense } from "react"

// server actions

const ProductsPage = async () => {
    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
    const products = await fetchProducts()
    return (
        <div>
            <h1>Products Page</h1>
            <Suspense fallback={<h2>Loading products...</h2>}>
                {
                    products?.map((product, idx) => (
                        <ProductsCard title={product.title} image={product.image} price={product.price} category={product.category} />
                    ))
                }
            </Suspense>
        </div>
    )
}

export default ProductsPage