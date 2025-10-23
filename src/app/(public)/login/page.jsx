"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Email + Password login
    const handleCredentialsLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn("credentials", {
            redirect: false,
            email: form.email,
            password: form.password
        });

        setLoading(false);

        if (res?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/"); // redirect after login
        }
    };

    // Google login
    const handleGoogleLogin = async () => {
        try {
            setLoading(true);
            await signIn("google", { callbackUrl: "/" });
        } catch (err) {
            console.error("Login failed:", err);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Welcome Back
                </h1>

                {/* Email + Password Login */}
                <form onSubmit={handleCredentialsLogin} className="space-y-4">
                    <div className="text-left">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="text-left">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-left">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 border-t border-gray-300" />
                    <span className="px-3 text-gray-500 text-sm">or</span>
                    <div className="flex-1 border-t border-gray-300" />
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="flex items-center justify-center gap-3 w-full py-3 border rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
                >
                    <span className="font-medium text-gray-700">
                        {loading ? "Signing in..." : "Continue with Google"}
                    </span>
                </button>

                <p className="text-sm text-gray-500 mt-6 text-center">
                    By continuing, you agree to our{" "}
                    <a href="/terms" className="text-blue-600 hover:underline">
                        Terms of Service
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
