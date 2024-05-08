import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Contacts from './pages/contacts';
import Layout from './pages/layout';

import './App.css'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/contacts' element={<Contacts/>}></Route>

    </Route>
    
    </>
  ))

  return <RouterProvider router={router}/>
}

export default App;
