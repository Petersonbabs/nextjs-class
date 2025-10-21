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
  // console.log(products)


  return (
    <div>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <h1>Home page</h1>
      <iframe width="670" height="377" src="https://www.youtube.com/embed/nzWVlT3YyTE" title="They Built Nigeria’s Biggest Brands — But You Hardly Hear Their Names | UNSUNG Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default page