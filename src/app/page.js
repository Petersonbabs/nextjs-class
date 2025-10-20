// "use client"
// server-side component
// 1. secure
// 2. fast
// 3. direct api call

const page = async () => {

  
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      return data
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

    // const products = await fetchProducts()
    console.log(products)
  

  return (
    <div>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      {/* <button onClick={fetchProducts}>Fetch products</button> */}
    </div>
  )
}

export default page