import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


export function HomeSection() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSection />,
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
