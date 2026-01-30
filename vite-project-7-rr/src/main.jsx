import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import {Home,About,Contact,User} from './components/index.js'



// First Way to create Routers
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {path:"",element:<Home/>},
//       {path:"about",element:<About/>},
//       {path:"contact",element:<Contact/>},
//     ]
//   }
// ])


//Second way to create Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
    
      <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github />}
    />
    </Route>  
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)