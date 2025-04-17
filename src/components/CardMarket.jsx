import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { Link } from 'react-router';

const CardMarket = ({name, desc, cover, like, price}) => {
  return (
    <Box 
      w={{ base:'300px',xl:'320px','2xl':'540px' }}
      h='100%'
      px='12px'
      pt='12px'
      pb={{ base:'20px','2xl':'42px' }}
      bgImage='linear-gradient(179.98deg, #141F33 0.01%, #3B5C99 145.35%)'
      boxShadow='0px 0px 12.1px 0px rgba(255, 255, 255, 1)'
      rounded={{ base:'40px','2xl':'80px' }}
      textAlign='left'
    >
      <Box position='relative' h={{ base:'220px', '2xl':'auto' }} w='full' rounded={{ base:'30px','2xl':'70px' }} overflow='hidden'>
        <Image src={`/${cover}`} alt={`Cover ${name}`}
          boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
          objectFit='cover'
          h='full'
          w='full'
        />
        <Flex 
          zIndex={9999} 
          alignItems='center' 
          justifyContent='center' 
          gap='8px' 
          position='absolute' 
          top={{ base:'10px',xl:'20px' }} 
          right={{ base:'16px',xl:'24px' }} 
          fontSize={{ base:'0.8rem', '2xl':'1rem' }}
          px={{ base:'18px','2xl':'26px' }} 
          py={{ base:'8px','2xl':'12px' }} 
          bg='white' 
          rounded='full'
        >
          <FaHeart />
          <Text>{like}</Text>
        </Flex>
      </Box>
      <Box px={{ base:'16px','2xl':'30px' }} pt={{ base:'12px', xl:'18px','2xl':'24px' }} color='white'>
        <Flex fontSize={{ base:'1.4rem', '2xl':'1.8rem' }} gap={{ base:'10px','2xl':'16px' }} alignItems='center' fontWeight={350}>
            <FiHome />
            <Text as='h4'>{name}</Text>
        </Flex>
        <Text as='p' fontSize={{ base:'10px',md:'0.8rem','2xl':'1rem' }} mt={{ base:'8px',xl:'16px' }} fontWeight={350}>{desc}</Text>
        <Flex mt={{ base:'28px','2xl':'40px' }} fontWeight={700} gap={{ base:'10px','2xl':'16px' }} fontSize={{ base:'0.8rem','2xl':'1rem' }}>
            <Box w='1/2'>
              <Link to='#buy'>
                <Flex py={{ base:'10px','2xl':'16px' }} gap={{ base:'6px','2xl':'10px' }} justifyContent='center' w='full' color='black' bg='white' border='1px soli #000000' rounded='full'>
                  <Image src='/icons/bag_black.png' objectFit='contain' w={{ base:'14px', '2xl':'16px' }}/>
                  <Text>Buy NFT</Text>
                </Flex>
              </Link>
            </Box>
            <Text py={{ base:'10px','2xl':'16px' }} w='1/2' textAlign='center' border='1px solid #FFFFFF' rounded='full'>
              Price {price} $MPRO
            </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default CardMarket;
