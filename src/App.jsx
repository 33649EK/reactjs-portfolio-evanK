import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <main className="primaryContent">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
