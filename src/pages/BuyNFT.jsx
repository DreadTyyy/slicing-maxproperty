import { Box, Flex } from "@chakra-ui/react";
import SideBar from "@/components/SideBar";
import BottomNavBar from "@/components/BottomNavBar";
import DashboardHeader from "@/components/DashboardHeader";
import CardMarket from '@/components/CardMarket';

const items = [
    {id: 1, name: 'Vila in Bali', desc: 'Welcome to Bali, a destination that represents a tropical paradise throughout the world. Located in Indonesia, this island beckons tourists with its countless natural wonders, exudes deep cultural charm, and offers experiences beyond the limits of imagination.', cover: 'card_market_1.jfif', like: 47, price: 300},
    {id: 2, name: 'Vila in Bali', desc: 'Welcome to Bali, a destination that represents a tropical paradise throughout the world. Located in Indonesia, this island beckons tourists with its countless natural wonders, exudes deep cultural charm, and offers experiences beyond the limits of imagination.', cover: 'card_market_1.jfif', like: 47, price: 300},
    {id: 3, name: 'Vila in Bali', desc: 'Welcome to Bali, a destination that represents a tropical paradise throughout the world. Located in Indonesia, this island beckons tourists with its countless natural wonders, exudes deep cultural charm, and offers experiences beyond the limits of imagination.', cover: 'card_market_1.jfif', like: 47, price: 300},
    {id: 4, name: 'Vila in Bali', desc: 'Welcome to Bali, a destination that represents a tropical paradise throughout the world. Located in Indonesia, this island beckons tourists with its countless natural wonders, exudes deep cultural charm, and offers experiences beyond the limits of imagination.', cover: 'card_market_1.jfif', like: 47, price: 300},
]

const BuyNFT = () => {
  return (
    <Flex flexDir={{ base: 'column', xl: 'row' }}>
      <Box w={{ base: 'full', xl:'260px', '2xl':'360px' }}>
        <SideBar active='buy_nft'/>
      </Box>
      <Flex
         flexDir='column'
         h='100vh'
         pt={{base:'60px', xl: '0'}}
         pb={{ base: '60px', md:'110px', xl: '48px' }}
         flex={1}
         bg='secondary.400'
         overflowX='hidden'
         overflowY='auto'
      >
        <DashboardHeader title='Buy NFT' />
        <Box
          pt={{ base:'0px','2xl':'42px' }}
          pl={{ base:'5%',xl:'32px','2xl':'64px' }}
          pr={{ base:'5%',xl:'32px' }}
        >
          <Flex 
            className='local-scrollbar dir-ltr mobile-scrollbar'
            scrollSnapType={{ base:'x mandatory', xl:'none' }}
            scrollBehavior="smooth"
            gap={{ base:'32px','2xl':'40px' }} 
            wrap='nowrap'
            w='100%' 
            minW='0'
            overflowX='auto' 
            pb={{ base:'40px',xl:'24px','2xl':'64px' }} 
            px='10px' 
            pt='10px'
          >
            {items.map((item) => (
              <Box key={item.id} scrollSnapAlign="center">
                <CardMarket {...item} />
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

export default BuyNFT;
