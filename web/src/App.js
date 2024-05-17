import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './components/root';
import content from './content';
import Home from './pages/home';
import { ChakraProvider } from '@chakra-ui/react';
import Students from './pages/students';
import Employees from './pages/employees';

function App() {
  const [students, employees, cooperation, news] = content.root.nav
  const routing = createBrowserRouter([
    {
      path:'/',
      Component: Root,
      children: [
        {
          path: '/',
          element: <Home name={'Home'} />
        },
        {
          path: students.destination,
          element: <Students/>
        },
        {
          path: employees.destination,
          element: <Employees name={employees.name} />
        },
        {
          path: cooperation.destination,
          element: <p/>
        },
        {
          path: news.destination,
          element: <p/>
        }
      ]
    }
  ])
  return (
    <ChakraProvider>
      <RouterProvider router={routing}/>
    </ChakraProvider>
  );
}

export default App;
