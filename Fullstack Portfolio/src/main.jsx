//**The entry point for the React application, where the App component is rendered. */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/aboutme',
        element: <AboutMe />
      }, {
        path: '/projects',
        element: <Projects />
      }, {
        path: '/contactme',
        element: <ContactMe />
      },
    ]
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
