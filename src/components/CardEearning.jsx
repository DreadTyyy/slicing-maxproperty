import { Grid, Box, Flex, Text, Image } from "@chakra-ui/react";
import { MdOutlineTimer } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const ListItem = ({title, value}) => {
    return (
      <Grid 
        templateColumns="1fr 1fr" 
        fontSize={{ base:'0.6rem',md:'1rem','2xl':'1.5rem'  }}
        fontWeight={400}
        color='white'
      >
        <Text>{title}</Text>
        <Text>: <Text as='span'>{value}</Text></Text>
      </Grid>
    )
};
  
const CardEarning = ({date, earn, cover}) => {
    return (
      <Flex
        position='relative'
        alignItems='center'
        justifyContent={{ base:'start',md:'center' }}
        h={{ base:'120px', md:'180px', '2xl':'222px' }}
        w='full'
        gap='8px'
      //   px='0px'
        bg='secondary.500'
        boxShadow='0px 0px 8.6px 0px rgba(255, 255, 255, 1)'
        rounded={{ base:'32px', md:'64px','2xl':'72px' }}
      >
        <Box aspectRatio='square' h='full' position={{ base:'relative',md:'absolute' }} left={{ base:'0',md:'10px' }}>
          <Image src={`/${cover}`} alt={`Cover ${cover}`}
            w='full'
            h='full'
            rounded={{ base:'32px', md:'64px','2xl':'72px' }}
            objectFit='cover'
          />
        </Box>
        <Box>
          <Flex gap={{ base:'4px',md:'16px','2xl':'32px' }}>
            <Text as='span' fontSize={{ base:'24px',md:'42px', '2xl':'64px' }}>
              <MdOutlineTimer color='white' size='1em' />
            </Text>
            <Flex flexDir='column' gap='4px'>
              <ListItem title='Start Earning' value={date}/>
              <ListItem title='Estimated Earning' value={`${earn} MPRO`}/>
            </Flex>
          </Flex>
          <Flex mt={{ base:'16px',md:'20px' }} gap={{ base:'8px',md:'14px' }} fontSize={{ base:'8px',md:'1rem','2xl':'1.25rem' }}>
            <Flex 
              justifyContent='center'
              alignItems='center'
              gap={{ base:'4px','2xl':'8px' }}
              w='1/2' 
              py={{ base:'8px','2xl':'12px' }} 
              bg='white' 
              border='1px solid #000000' 
              color='secondary.500'
              rounded='full'
            >
              <Image src='/icons/package.png' w={{base:'16px',md:'24px','2xl':'30px'}}/>
              <Text fontWeight={700}>Claim</Text>
            </Flex>
            <Flex 
              justifyContent='center'
              alignItems='center'
              gap={{ base:'4px','2xl':'8px' }}
              w='1/2' 
              py={{ base:'8px','2xl':'12px' }} 
              border='1px solid #FFFFFF' 
              color='white'
              rounded='full'
            >
              <Text fontSize={{ base:'16px',md:'24px', '2xl':'36px' }}>
                <IoMdCloseCircle size='1em' />
              </Text>
              <Text fontWeight={700}>Stop Earning</Text>
            </Flex>
          </Flex>
        </Box>
        <Box />
      </Flex>
    )
};

export default CardEarning;