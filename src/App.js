import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body'
import Contact from './components/Contact'
import Error from './components/Error';
import Restaurant from './components/Restaurant';

//Lazy Loading
//Dynamic Bundling
//On-demand loading
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element: <Body/>,
      },
      {
        path:"/about",
        element: <Suspense fallback = {<h1>Loading in progress.....</h1>}><About/></Suspense>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback = {<h1>Loading in progress.....</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:restId",
        element:<Restaurant />
      }
    ],
    errorElement: <Error/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);