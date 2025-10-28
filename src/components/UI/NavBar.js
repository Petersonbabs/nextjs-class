import { useTheme } from "next-themes"
import Link from "next/link"

const NavBar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: ".7rem 4rem", background: "#999", marginBottom: '1rem' }}>
            <h1>Logo</h1>

            <button>Dark mode</button>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem" }}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/products">Products</Link>
            </div>
        </div>
    )
}

export default NavBar