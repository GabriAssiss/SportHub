import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Login from './pages/Login.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])

createRoot(document.getElementById("root") as HTMLBRElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);