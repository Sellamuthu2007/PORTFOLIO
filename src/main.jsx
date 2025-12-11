import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import App from './App.jsx'
import Projects from './projects.jsx';
import Homepage from './home.jsx';
import Notfound from './notfound.jsx';
import Achievement from './achievements.jsx';
 
const urls = createBrowserRouter([
  {
    path : '/',
    element : <Homepage/>,
    errorElement : <Notfound/>
  },{
    path : '/projects',
    element : <Projects/>
  },
  {
    path : '/hackathons',
    element : <Achievement/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={urls} />
  </StrictMode>
);
