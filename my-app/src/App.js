import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css';
import Home from './components/Home'
import SingleMovie from './components/SingleMovie'
import Error from './components/Error'
import { counterContext } from "./components/context";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home/></>
    },
    {
      path:"movie/:id",
      element:<><SingleMovie/></>
    },
    {
      path:"*",
      element:<><Error/></>
    }
  ])
  return (
    
    <>
    <counterContext.Provider>
    <RouterProvider router={router}/>
    </counterContext.Provider>
    </>
    
  );
}

export default App;
