import { Box, Flex, Text, Grid, Image } from '@chakra-ui/react';
import { FiHome } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { ImFolderUpload } from "react-icons/im";
import { FaTag } from "react-icons/fa6";

const CardCollection = ({name, initialDate, expiredDate, cover}) => {
    return (
      <Box 
        position='relative'
        w='full'
        pt={{ base:'0px', md:'8px', xl: '10px' }}
        px={{ base:'0px',md:'8px', xl: '10px' }}
        pb={{ base:'8px', md:'18px', xl:'24px' }}
        bgImage='linear-gradient(179.98deg, #141F33 0.02%, #3B5C99 144.78%)'
        boxShadow={{ base:'0px 0px 4px 0px rgba(255, 255, 255, 0.71)', 
          xl: '0px 0px 13px 0px rgba(255, 255, 255, 0.71)'
         }}
        rounded={{ base:'16px', md:'32px', xl: '44px','2xl': '56px' }}
      >
        <Box aspectRation='square'>
          <Box
              position="absolute"
              top="0"
              left="15%"
              bg="white"
              w={{ base: "16px", md:'24px', xl: '32px', '2xl': '42px' }}
              h={{ base:"30px", md:'38px', xl:'46px', '2xl': '72px' }}
              clipPath="polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)"
              zIndex="10"
          >
            <Box 
              position='absolute' 
              top='40%' 
              left='50%' 
              transform='translate(-50%, -50%)' 
              fontSize={{ base:"10px", md:'12px', xl:'18px', '2xl': '24px' }}
             >
              <FaCheckCircle color="black" fontSize="1em" />
            </Box>
          </Box>
          <Image src={`/${cover}`} alt='Cover collection'
            h='full'
            w='full'
            objectFit='cover'
            rounded={{ base:'16px', md:'32px', xl: '44px','2xl': '56px' }}
          />
        </Box>
        <Flex 
          mt={{ base:'6px', xl:'16px' }}
          gap={{ base:'4px', xl:'10px' }} 
          color='white' 
          justifyContent='center' 
          alignItems='center' 
          fontSize={{ base:'0.8rem', md:'1rem', xl: '1.25rem', '2xl': '1.5rem' }}
        >
          <FiHome />
          <Text>{name}</Text>
        </Flex>
        <Flex 
          mt={{ base:'6px', xl:'20px' }}
          px='4px' 
          flexDir='column' 
          w='full' 
          color='white' 
          fontSize={{ base:'8px', md:'0.8rem', xl:'1rem' }} 
        >
          <Grid gridTemplateColumns='repeat(2, 1fr)' w='full' placeItems='center'>
            <Text w='fit-content'>Minted Date:</Text>
            <Text w='fit-content'>{initialDate}</Text>
          </Grid>
          <Grid gridTemplateColumns='repeat(2, 1fr)' w='full' placeItems='center'>
            <Text w='fit-content'>Expired Date:</Text>
            <Text w='fit-content'>{expiredDate}</Text>
          </Grid>
        </Flex>
        <Flex 
          fontSize={{ base:'8px', md:'0.8rem', xl:'1rem' }} 
          mt={{ base:'8px', xl:'20px' }} 
          px={{ base:'4px', xl:'20px' }} 
          gap={{ base:'6px', xl:'16px' }}
        >
          <Flex 
            gap={{ base:'4px', xl:'10px' }} 
            justifyContent='center' 
            alignItems='center' 
            w='1/2' 
            py={{ base:'2px', xl:'10px' }} 
            color='black' 
            bg='white' 
            border='1px solid #000000' 
            rounded='full'
          >
            <ImFolderUpload fontSize='1em'/>
            <Text fontWeight={700}>Send</Text>
          </Flex>
          <Flex 
            gap={{ base:'4px', xl:'10px' }} 
            justifyContent='center' 
            alignItems='center' 
            w='1/2' 
            py={{ base:'2px', xl:'10px' }} 
            color='white' 
            border='1px solid #FFFFFF' 
            rounded='full'
          >
            <Text as='span' rotate='135deg'>
              <FaTag fontSize='1em' />
            </Text>
            <Text fontWeight={700}>Sell</Text>
          </Flex>
        </Flex>
      </Box>
    )
};

export default CardCollection;