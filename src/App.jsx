import { Route, Routes } from 'react-router';
import { Box } from '@chakra-ui/react';
import HomePage from '@/pages/HomePage';
import Dashboard from '@/pages/Dashboard';
import Affiliate from '@/pages/Affiliate'
import BuyNFT from '@/pages/BuyNFT';
import Earning from '@/pages/Earning';
import Rewards from '@/pages/Rewards';
import '@/style/style.css';

function App() {

  return (
    <Box fontFamily='Segoe UI'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/affiliate' element={<Affiliate />}/>
        <Route path='/market' element={<BuyNFT />}/>
        <Route path='/earning' element={<Earning />}/>
        <Route path='/rewards' element={<Rewards />}/>
      </Routes>
    </Box>
  )
}

export default App;
