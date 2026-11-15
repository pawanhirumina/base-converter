import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'

export function NotFound() {
  return (
    <div className="w-full flex-col bg-zinc-950 gap-2 h-screen flex items-center justify-center">
      <h1 className="text-white text-3xl font-bold">404</h1>
      <p className="text-white">Page Not Found</p>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
