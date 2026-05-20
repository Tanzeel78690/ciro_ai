// "use client"

// import { useEffect, useState } from "react"

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState<string | null>(null)

//   useEffect(() => {
//     const savedTheme =
//       localStorage.getItem("ciro-theme") || "light"

//     setTheme(savedTheme)

//     if (savedTheme === "dark") {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }, [])

//   const toggleTheme = () => {
//     if (!theme) return

//     const nextTheme =
//       theme === "light"
//         ? "dark"
//         : "light"

//     setTheme(nextTheme)

//     localStorage.setItem(
//       "ciro-theme",
//       nextTheme
//     )

//     if (nextTheme === "dark") {
//       document.documentElement.classList.add("dark")
//     } else {
//       document.documentElement.classList.remove("dark")
//     }
//   }

//   // Prevent hydration mismatch
//   if (!theme) {
//     return (
//       <div
//         className="
//           h-[42px]
//           w-[110px]
//           rounded-full
//           border
//           border-slate-200
//           bg-white
//           dark:border-slate-700
//           dark:bg-slate-900
//         "
//       />
//     )
//   }

//   return (
//     <button
//       onClick={toggleTheme}
//       className="
//         rounded-full
//         border
//         border-slate-200
//         bg-white
//         px-4
//         py-2
//         text-sm
//         font-bold
//         text-slate-700
//         shadow-sm
//         transition
//         hover:bg-slate-50
//         dark:border-slate-700
//         dark:bg-slate-900
//         dark:text-slate-100
//         dark:hover:bg-slate-800
//       "
//     >
//       {theme === "light"
//         ? "🌙 Dark"
//         : "☀️ Light"}
//     </button>
//   )
// }
"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("ciro-theme") === "dark"
        ? "dark"
        : "light"

    setTheme(savedTheme)
    setMounted(true)

    document.documentElement.classList.toggle(
      "dark",
      savedTheme === "dark"
    )
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"

    setTheme(nextTheme)
    localStorage.setItem("ciro-theme", nextTheme)

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    )
  }

  if (!mounted) {
    return (
      <div
        suppressHydrationWarning
        className="h-[42px] w-[110px] rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
      />
    )
  }

  return (
    <button
      suppressHydrationWarning
      onClick={toggleTheme}
      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}