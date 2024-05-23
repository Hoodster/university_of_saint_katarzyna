import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import useAppRouting from '../hooks/useAppRouting';


function App() {
  const routing = useAppRouting();

  return (
    <ChakraProvider>
      <RouterProvider router={routing} />
    </ChakraProvider>
  );
}

export default App;
