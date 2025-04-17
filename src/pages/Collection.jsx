import { Flex, Box, Grid } from "@chakra-ui/react";
import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";
import BottomNavBar from "@/components/BottomNavBar";
import CardCollection from '@/components/CardCollection';

const items = [
    {id: 1, name: 'Hotel in Bali', initialDate: '2025-01-01', expiredDate: '2025-02-01', cover: 'card_market_1.jfif'},
    {id: 2, name: 'Hotel in Bali', initialDate: '2025-01-01', expiredDate: '2025-02-01', cover: 'card_market_1.jfif'},
    {id: 3, name: 'Hotel in Bali', initialDate: '2025-01-01', expiredDate: '2025-02-01', cover: 'card_market_1.jfif'},
    {id: 4, name: 'Hotel in Bali', initialDate: '2025-01-01', expiredDate: '2025-02-01', cover: 'card_market_1.jfif'},
    {id: 5, name: 'Hotel in Bali', initialDate: '2025-01-01', expiredDate: '2025-02-01', cover: 'card_market_1.jfif'},
    {id: 6, name: 'Hotel in Bali', initialDate: '2025-01-01', expiredDate: '2025-02-01', cover: 'card_market_1.jfif'},
    {id: 7, name: 'Hotel in Bali', initialDate: '2025-01-01', expiredDate: '2025-02-01', cover: 'card_market_1.jfif'},
]

const Collection = () => {
  return (
    <Flex flexDir={{ base: 'column', xl: 'row' }}>
      <Box w={{ base: 'full', xl:'260px', '2xl':'360px' }}>
        <SideBar active='collection'/>
      </Box>
      <Flex
         flexDir='column'
         h='100vh'
         pt={{base:'60px', xl: '0'}}
         pb={{ base: '60px', md:'110px', xl: '0' }}
         flex={1}
         bg='secondary.400'
         overflowX='hidden'
         overflowY='auto'
      >
        <DashboardHeader title='Collections' />
        <Box
          className='local-scrollbar dir-ltr mobile-scrollbar'
          mt={{ base:'0px','2xl':'42px' }}
          pl={{ base:'2%',xl:'32px','2xl':'64px' }}
          pr={{ base:'2%',xl:'16px' }}
          mr={{ base:'0',xl:'32px' }}
          flex={1}
          overflow='auto'
        >
          <Grid 
            gridTemplateColumns='repeat(3, 1fr)'
            gapX={{ base:'8px', md:'32px','2xl':'40px' }}
            gapY={{ base:'16px', md: '32px','2xl':'40px' }}
            wrap='nowrap'
            w='100%' 
            minW='0'
            overflowY='auto' 
            pb={{ base:'40px',xl:'24px','2xl':'64px' }} 
            px='10px' 
            pt='10px'
          >
            {items.map((item) => (
              <Box key={item.id} scrollSnapAlign="center">
                <CardCollection {...item} />
              </Box>
            ))}
          </Grid>
        </Box>
      </Flex>
      <Box display={{ base: 'block', xl:'none' }}>
        <BottomNavBar />
      </Box>
    </Flex>
  )
};

export default Collection;
