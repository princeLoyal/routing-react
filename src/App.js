import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements,
  Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./components/Root";
import ErrorPage from './components/Error';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />}/>
//     <Route path='/products' element={<Products />}/>
//   </Route>
// );
const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <Products />}
    ]
  },
]);

// const router = createBrowserRouter(routeDefinitions);
const App = () => {
 
  return <RouterProvider router={router}/>
};
export default App;