import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <Box
      px={{ base: '5%', md: '80px' }}
      py={{ base: '100px', md: '32px' }}
      minH='100vh'
      display='flex'
      justifyContent='center'
      alignItems='center'
      bgColor='primary.200'
    >
        <Box 
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
            <Image></Image>
            <Link to='#connect-wallet'>
                <Text as='p' fontSize='20px' fontWeight={700} color='primary.500'>
                    <Image src='/icons/wallet.png'/>
                    <span>Connect Wallet</span>
                </Text>
            </Link>
        </Box>
    </Box>
  )
}

export default HomePage;
