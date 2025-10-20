const { NextResponse, NextRequest } = require("next/server")

export async function GET() {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return NextResponse.json({
            status: "success",
            message: "First All products",
            products: data
        })
    } catch (error) {
        console.log(error)
        NextRequest.json({
            status: "error",
            message: "Unable to fetch products",
            error
        })
    }
}


export const POST = async () => {
    return NextResponse.json({
        status: "success",
        message: "Product added successfully",
    });
};

export function PATCH() {
    return NextResponse.json({
        status: "success",
        message: "Product Updated successfuluy"
    })
}
export function DELETE() {
    return NextResponse.json({
        status: "success",
        message: "Product dELETED successfuluy"
    })
}

