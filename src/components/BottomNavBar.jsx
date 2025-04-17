import { Box, Image } from '@chakra-ui/react';
import { Link } from 'react-router';

const BottomNavBar = () => {
  const icons = {
      dashboard: 'dashboard_root.png',
      buy_nft: 'bag.png',
      earning: 'earning_root.png',
      collection: 'collection_root.png',
  } 
  return (
    <Box 
      position='fixed'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      px={{ base: '32px', md: '64px' }} 
      bottom='0'
      left='0'
      bg='secondary.500' 
      w='full'
      h={{ base:'50px', md: '100px' }}
      >
        <Link to='/dashboard'>
          <Image src={`/icons/${icons.dashboard}`} h={{ base:'20px', md:'28px' }}/>
        </Link>
        <Link to='/market'>
          <Image src={`/icons/${icons.buy_nft}`} h={{ base:'20px', md:'28px' }}/>
        </Link>
        <Link to='/earning'>
          <Image src={`/icons/${icons.earning}`} h={{ base:'20px', md:'28px' }}/>
        </Link>
        <Link to='/collection'>
          <Image src={`/icons/${icons.collection}`} h={{ base:'20px', md:'28px' }}/>
        </Link>
    </Box>
  )
}

export default BottomNavBar