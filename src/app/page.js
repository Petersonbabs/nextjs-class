"use client"
// server-side component
// 1. secure
// 2. fast
// 3. direct api call

import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  const { theme, setTheme } = useTheme() // theme: light, dark, system

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch("https://fakestoreapi.com/products")
  //     const data = await response.json()
  //     return data
  //     // console.log(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const products = await fetchProducts()
  // console.log(products)

  // text
  // spacing
  // sizing: 4: 1rem (16px), 2: 0.5rem (8px), 6: 1.5rem (24px)
  // box model: margin, padding, border, height, width
  // flex-box
  // grid-layout
  // positioning
  // responsiveness: sm, md, lg, xl, 2xl
  // borders
  // backgrounds
  // effects
  // transitions/animations
  // interactivity
  // typography

  // margin: m-4 => margin: 1rem (16px), mb, mt, ml, mr, mx, my
  // padding: p-4 => padding: 1rem (16px)
  // border: border

  return (
    <>
      {/* <div className="space-y-8">
      <p className="text-red-500 text-sm text-center">lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem</p>
      <p className="text-red-600 text-lg text-start">lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem</p>
      <p className="text-red-700 text-xl text-end ">lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem</p>
      <p className="text-red-700 text-2xl">lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem</p>
      <p className="text-red-700 text-3xl">lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem lorem loremloremloremloremlorem lorem lorem lorem</p>

    </div> */}
      {/* <div className="space-y-4 my-8">
        <div className="border-2 border-[#123456] border-dotted p-4 h-40 w-20">marginmarginmarginmarginmarginmarginmarginmarginmarginmarginmarginmargin</div>
        <div className="border-4 border-blue-500 border-dotted px-4 py-4 w-[250px]">marginmarginmarginmarginmarginmarginmarginmarginmarginmarginmarginmargin</div>
        <div className="border-6 border-yellow-300 border-double pt-4 pr-4 pb-4 pl-4">marginmarginmarginmarginmarginmarginmarginmarginmarginmarginmarginmargin</div>
      </div> */}
      {/* <div className="space-y-4 my-8 flex gap-4 items-start justify-center">
        <div className="border h-[150px] w-full"></div>
        <div className="border h-[100px] w-full"></div>
        <div className="border h-[200px] w-full"></div>
      </div> */}
      {/* <div className="space-y-4 my-8 flex flex-col gap-4">
        <div className="border h-[150px] w-full">border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border h-[150px]border </div>
        <div className="border h-[150px] w-full"></div>
        <div className="border h-[150px] w-full"></div>
      </div> */}

      {/* <div className="grid grid-cols-2 gap-4">
        <div className="border h-[150px] w-full"></div>
        <div className="border h-[150px] w-full"></div>
        <div className="border h-[150px] w-full"></div>
      </div> */}
      {/* max, min */}
      <nav className="bg-gray-400 p-4">
        <div className=" flex justify-between items-center w-full m-auto border max-w-[1000px]">
          <h1 className="text-2xl text-blue-500">Logo</h1>
          <ul className="gap-4 items-center hidden md:flex ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <button className="md:hidden">Menu</button>
        </div>
      </nav>

      <button className="bg-red-300 px-4 py-0.5 m-4 block text-white hover:bg-red-700 ease-in-out duration-700   ">Click</button>
      <button className="bg-red-300 px-4 py-0.5 m-4 block text-white hover:bg-red-700 ">Click</button>
      {/* <button className="bg-red-500 px-4 py-0.5 m-4 block text-white hover:bg-red-700 animate-ping  ">Ping</button>
      <button className="bg-red-300 px-4 py-0.5 m-4 block text-white hover:bg-red-700 animate-spin  ">Click</button>
      <button className="bg-red-300 px-4 py-0.5 m-4 block text-white hover:bg-red-700 animate-pulse  ">Click</button> */}

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 my-8">
        <div className="border h-[100px] w-full flex items-center justify-center">
          <p>Hello</p>

        </div>
        <div className="border h-[100px] w-full  flex items-center justify-center"><p>Hello</p></div>
        <div className="border h-[100px] w-full  flex items-center justify-center"><p>Hello</p></div>
        <div className="border h-[100px] w-full  flex items-center justify-center"><p>Hello</p></div>
        <div className="border h-[100px] w-full  flex items-center justify-center"><p>Hello</p></div>
      </div>


    </>
  )
}

export default page