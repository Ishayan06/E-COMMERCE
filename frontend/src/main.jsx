import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ShopContextProvider from './context/ShopContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PLaceOrder';
import Order from './pages/Order';
import Verify from './pages/verify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {path:'collection', element:<Collection/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'product/:productId',element:<Product/>},
      {path:'cart',element:<Cart/>},
      {path:'login',element:<Login/>},
      {path: 'placeorder', element: <PlaceOrder /> },
      {path:'order',element:<Order/>},
      {path:'verify',element:<Verify/>}

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
    <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>
);
