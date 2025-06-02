import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Add from './pages/Add.jsx';
import List from './pages/List.jsx';
import Order from './pages/Order.jsx';

// 🔐 Get token from localStorage (or however you're storing it)
const token = localStorage.getItem('token');

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Add token={token} /> },
      { path:'add', element: <Add token={token} /> },
      { path: 'list', element: <List token={token} /> },
      { path: 'orders', element: <Order token={token} /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
