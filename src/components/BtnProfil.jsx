import { Flex, Box, Image, Text } from '@chakra-ui/react';
import React from 'react'

const BtnProfil = () => {
  return (
    <Flex
      fontFamily='Inter'
      pl={{ base:'4px', md: '8px', xl:'16px' }}
      bg='secondary.500'
      alignItems='center'
      h='fit-content'
      gap={{ base:'6px', md: '10px', xl:'16px' }}
      rounded='full'
    >
      <Box 
        bg='red.600' 
        h={{ base:'20px', md: '24px', xl:'36px','2xl':'42px' }} 
        w={{ base:'20px', md: '24px', xl:'36px','2xl':'42px' }} 
        rounded='full'
        overflow='hidden'
      >
        <Image src='' objectFit='cover' size='full' alt='profil'/>
      </Box>
      <Text fontSize={{ base:'6px', md: '10px', xl:'0.8rem','2xl':'1rem' }} color='white' fontWeight={700}>
        DfyGjCgf6...........4Gf1C4
      </Text>
      <Box bg='primary.500' px={{ base:'10px', xl:'18px','2xl':'24px' }} rounded='full' py={{ base:'8px', xl:'14px','2xl':'20px' }}>
        <Text fontSize={{ base:'8px', md: '12px', xl:'0.8rem','2xl':'1rem' }} color='secondary.500' fontWeight={700}>Disconnected</Text>
      </Box>
    </Flex>
  )
}

export default BtnProfil;
