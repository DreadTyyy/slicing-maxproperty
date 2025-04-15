import { Box, Text, Image, Flex } from '@chakra-ui/react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <Box
      position='relative'
      fontFamily='Segoe UI'
      h='100vh'
      w='100%'
      bgColor='secondary.500'
      overflow='hidden'
    >
        <Box 
          zIndex={9999}
          position='fixed'
          px='36px'
          py={16}
          display={{ base: 'none', 'md': 'flex' }}
          justifyContent='space-between'
          alignItems='center'
          h='80px'
          w='full'
        >
            <Image src='/MPRO LOGO 1 5.png' alt='logo Max Property' h='80px'/>
            <Link to='#connect-wallet'>
                <Box
                  display='flex'
                  p={{ base:'12px 20px', '2xl':'16px 24px' }} 
                  alignItems='end' 
                  bg='primary.500'
                  rounded='full'
                  boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                >
                  <Image src='/icons/Wallet.png' size='24px' mr={3}/>
                  <Text as='p' fontSize={{ base:'1rem', '2xl':'1.25rem' }} fontWeight={600} color='secondary.500'>
                    Connect Wallet
                  </Text>
                </Box>
            </Link>
        </Box>
        <Flex
          position='relative'
          zIndex={9999}
          px={{ base: '5%', md: '80px' }}
          py={{ base: '0', md: '32px' }}
          h='full'
          flexDir={{ base: 'column', md: 'row' }}
          alignItems='center'
          justifyContent={{ base: 'center', md: 'start' }}
          gap={{ base:'24px', xl:'64px', '2xl':'180px' }}
        >
          <Box maxW='720px'>
            <Text as='h1' fontSize={{ base:'4rem', xl:'6rem', '2xl':'8rem' }} fontWeight={700} lineHeight='104%' color='white'>
              <Text as='p' color='primary.500'>MAX</Text>
              PROPERTY
            </Text>
            <Text as='p' color='white' fontSize={{ base:'1rem', '2xl':'1.25rem' }} fontWeight={400} mt={{ base: '22px', md:'42px' }}>
            Max Property (MPRO) is a cryptocurrency that represents ownership in physical property, offering a global investment opportunity with blockchain transparency and high liquidity.
            </Text>
          </Box>
          <Image src='/mp 1.png' height={{ base: '360px', xl: '540px', '2xl':'700px' }} alt='Max Property Header' display={{ md: 'block', base: 'none'}}/>
          <Link to='#connect-wallet'>
            <Box
              display={{ base:'flex', md: 'none' }}
              p={{ base:'12px 20px', '2xl':'16px 24px' }} 
              alignItems='end' 
              bg='primary.500'
              rounded='full'
              boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            >
              <Image src='/icons/Wallet.png' size='20px' mr={3}/>
              <Text as='p' fontSize='1.1rem' fontWeight={600} color='secondary.500'>
                Connect Wallet
              </Text>
            </Box>
          </Link>
        </Flex>
        <Box
          position='absolute'
          top={{ base: '-23%', md: '-40%', xl:'-60%','2xl':'-40%' }}
          right={{ base: '-40%', md: '-30%', xl:'-10%' }}
          rounded='full'
          height={{ base:'500px', md: '1000px', '2xl':'1500px' }}
          width={{ base:'500px', md: '1000px', '2xl':'1500px' }}
          bgImage='radial-gradient(farthest-corner at bottom right,
                    rgba(20, 243, 255, 1) 0%,
                    rgba(20, 31, 51, 1) 70%)' 
        ></Box>
    </Box>
  )
}

export default HomePage;
