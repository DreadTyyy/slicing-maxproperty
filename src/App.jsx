import { Route, Routes } from 'react-router';
import { Box } from '@chakra-ui/react';
import HomePage from '@/pages/HomePage';
import Dashboard from '@/pages/Dashboard';
import Affiliate from '@/pages/Affiliate'

function App() {

  return (
    <Box fontFamily='Segoe UI'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/affiliate' element={<Affiliate />}/>
      </Routes>
    </Box>
  )
}

export default App;
