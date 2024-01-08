import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Approutes from './Routtes/Approutes';
export const API_URL = 'https://659b9bcad565feee2dab4dc5.mockapi.io/blogs'



function App() {
    const router = createBrowserRouter(Approutes)
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
