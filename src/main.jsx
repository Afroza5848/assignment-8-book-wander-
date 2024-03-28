import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import ListedBooks from './pages/ListedBooks/ListedBooks';
import PagesToRead from './pages/PageToRead/PagesToRead';
import BookDetails from './components/BookDetails/BookDetails';
import ReadBooks from './components/ReadBooks/ReadBooks';
import WishlistBooks from './components/WishlistBooks/WishlistBooks';
import Faqs from './components/Faqs/Faqs';
import Contact from './components/Contact/Contact';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            index: true,
            element:<ReadBooks></ReadBooks>,
          },
          {
            path: 'wishlistBooks',
            element:<WishlistBooks></WishlistBooks>
          }
        ]
      },
      {
        path:"/pagesToRead",
        element:<PagesToRead></PagesToRead>
      },
      {
        path:"/books/:id",
        element: <BookDetails></BookDetails>,
        
      },
      {
        path:"/faqs",
        element: <Faqs></Faqs>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)