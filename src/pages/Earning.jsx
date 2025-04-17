import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";
import BottomNavBar from "@/components/BottomNavBar";
import CardEarning from "@/components/CardEearning";

const items = [
    {id:1, date:'01-01-2025 13:00', earn: 10, cover: 'card_market_1.jfif'},
    {id:2, date:'01-01-2025 13:00', earn: 10, cover: 'card_market_1.jfif'},
    {id:3, date:'01-01-2025 13:00', earn: 10, cover: 'card_market_1.jfif'},
    {id:4, date:'01-01-2025 13:00', earn: 10, cover: 'card_market_1.jfif'},
    {id:5, date:'01-01-2025 13:00', earn: 10, cover: 'card_market_1.jfif'},
    {id:6, date:'01-01-2025 13:00', earn: 10, cover: 'card_market_1.jfif'},
];

const Earning = () => {
  return (
    <Flex flexDir={{ base: 'column', xl: 'row' }}>
      <Box w={{ base: 'full', xl:'260px', '2xl':'360px' }}>
        <SideBar active='earning'/>
      </Box>
      <Flex
         flexDir='column'
         h='100vh'
         minH='100vh'
         maxH='100vh'
         pt={{base:'60px', xl: '0'}}
         pb={{ base: '60px', md:'110px', xl: '0' }}
         flex={1}
         bg='secondary.400'
         overflowX='hidden'
         overflowY='hidden'
      >
        <DashboardHeader title='Earning' />
        <Box pt={{ base:'0px','2xl':'42px' }}>
          <Flex 
            py='6px'
            justifyContent='center' 
            alignItems='center' 
            fontWeight={700}
            bg='primary.500'
            fontSize={{ base:'0.8rem', '2xl':'1.25rem' }}
            color='secondary.500'
            gap='24px'
          >
            <Text>
              Airdrop 5% / Month
            </Text>
            <Link to='#start'>
              <Flex 
                gap='8px'
                py={{ base:'10px', md:'12px','2xl':'20px' }} 
                px={{ base:'16px', md:'24px','2xl':'28px' }} 
                bg='white' 
                alignItems='center' 
                rounded={{ base:'10px','2xl':'16px' }} 
                boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'>
                <Image src='/icons/earning_active.png' scale={{base:0.8, md:1}}/>
                <Text>START EARNING</Text>
              </Flex>
            </Link>
          </Flex>
        </Box>
        <Box
          className='local-scrollbar dir-ltr'
          mt={{ base:'24px',xl: '32px','2xl':'72px' }}
          ml={{ base:'2%',xl:'32px','2xl':'64px' }}
          mr={{ base:'2%',xl:'32px' }}
          pr={{ base:'0',xl:'26px' }}
          flex={1}
          overflowY='auto'
        >
          <Flex 
            p='8px'
            flexDir='column' 
            gap={{ base:'16px',md:'24px','2xl':'32px' }}
          >
            {items.map((item) => (
              <Box key={item.id}>
                <CardEarning {...item} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
      <Box display={{ base: 'block', xl:'none' }}>
        <BottomNavBar />
      </Box>
    </Flex>
  )
}

export default Earning;
