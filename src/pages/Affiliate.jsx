import { useState } from 'react';
import { Box, Flex, Text, Grid, Input } from '@chakra-ui/react';
import SideBar from '@/components/SideBar';
import DashboardHeader from '@/components/DashboardHeader';
import BottomNavBar from '@/components/BottomNavBar';

const items = [
  {id: 1, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
  {id: 2, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
  {id: 3, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
  {id: 4, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
  {id: 5, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
  {id: 6, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
  {id: 7, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
  {id: 8, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
  {id: 9, address:'DfyGjCgf6ZDvxCCwvQcKxRZYqiZf8BBU1Drcoq4Gf1C4', register_date: '2025-03-12 / 13:00:00', total_teams: 100, action: ''},
];

const Affiliate = () => {
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const onFindAddress = () => {
    alert(address);
  };

  return (
    <Flex flexDir={{ base: 'column', xl: 'row' }}>
      <Box w={{ base: 'full', xl:'260px', '2xl':'360px' }} >
        <SideBar active='affiliate'/>
      </Box>
      <Flex
        flexDir='column'
        h='100vh'
        maxH={{ base:'100%', xl: '100vh' }}
        minH='100vh'
        pt={{base:'60px', xl: '0'}}
        pb={{ base: '60px', md:'110px', xl: '0' }}
        flex={1}
        bg='secondary.400'
        overflowX='hidden'
        overflowY='hidden'
      >
        <DashboardHeader title='Affiliate' />
        <Box
          pt={{ base:'24px','2xl':'42px' }}
          pl={{ base:'5%',xl:'32px','2xl':'64px' }}
          pr={{ base:'5%',xl:'32px' }}
        >
          <Flex 
            gap={{ base:'16px',xl:'24px' }} 
            mb={{ base:'20px', md:'26px',xl:'32px' }} 
            h={{ base:'42px',xl:'48px','2xl':'64px' }}
          >
            <Input 
              name='address'
              placeholder='Address'
              onChange={handleAddressChange}
              value={address}
              outline='none'
              border='1px solid'
              borderColor='primary.500'
              fontSize={{ base:'0.8rem', xl:'1rem', '2xl':'1.2rem' }}
              color='white'
              rounded='full'
              px={{ base:'20px',md:'40px','2xl':'56px' }}
              h='full'
              maxW='560px'
              _placeholder={{ 
                color: 'white'
               }}
            />
            <Text
              as='button'
              onClick={onFindAddress}
              px={{ base:'28px',xl:'40px','2xl':'48px' }}
              h='full'
              color='white'
              fontSize={{ base:'0.8rem', xl:'1rem', '2xl':'1.2rem' }}
              rounded='full'
              border='1px solid #FFFFFF'
              placeContent='center'
              cursor='pointer'
            >
              Find
            </Text>
          </Flex>
        </Box>
          <Box 
            className='local-scrollbar dir-ltr' 
            pr={{ base:'0', xl:'16px' }} 
            pl={{ base:'5%',xl:'32px','2xl':'64px' }}
            mr={{ base:'5%',xl:'32px' }}
            flex={1}
            maxH={{ base: '480px', xl: 'full' }} 
            overflowY="auto" 
            textAlign='center'
          >
          {/* (6 child) Set height: 422px 439px  535px*/}
          {/* Header */}
          <Box
            bg='secondary.400'
            position="sticky"
            top="0"
            textAlign='center'
            zIndex="docked"
            pb='10px'
          >
            <Grid
              // height: 68px 76px 91px :all +10px
              templateColumns="0.5fr minmax(100px, 2fr) 1fr 1fr 1fr"
              bg="secondary.500"
              color="white"
              fontSize={{ base:'10px',xl:'1rem','2xl':'1.2rem' }}
              gap='10px'
              pl={{ base:'10px',xl:'32px', '2xl': '56px' }}
              py={{ base: '20px',xl:'26px', '2xl':'32px' }}
              fontWeight={600}
              rounded={{ base:'26px', '2xl':'32px' }}
            >
              <Text>No</Text>
              <Text>Address</Text>
              <Text>Register Date</Text>
              <Text>Total Teams</Text>
              <Text>Action</Text>
            </Grid>
          </Box>

          {/* Body */}
          {items.map((item, i) => (
            <Grid
              // height: 49px 39px 64px:all +10px
              key={i}
              mb='10px'
              templateColumns="0.5fr minmax(100px, 2fr) 1fr 1fr 1fr"
              fontWeight={600}
              color='white'
              fontSize={{ base:'8px',xl:'1rem','2xl':'1.2rem' }}
              gap='10px'
              pl={{ base:'10px',xl:'32px', '2xl': '56px' }}
              alignItems="center"
              _hover={{ bg: "blue.900" }}
              borderBottom="1px solid rgba(255, 255, 255, 0.05)"
              bgImage='linear-gradient(269.01deg, #141F33 39.15%, #3B5C99 130.16%)'
              rounded='full'
              textAlign='center'
            >
              <Text>{i + 1}.</Text>
              <Text isTruncated fontSize={{ base:'8px',xl:'0.8rem','2xl':'1rem' }} textAlign='left'>{item.address}</Text>
              <Text>{item.register_date}</Text>
              <Text color="primary.500">{item.total_teams} 🧑‍🤝‍🧑</Text>
              <Text 
                as='button' 
                color='secondary.500' 
                bg="tertiarity.500" 
                w='full' 
                py={{ base:'12px', '2xl':'16px' }} 
                rounded='full'
                cursor='pointer'
              >
                View
              </Text>
            </Grid>
          ))}
          </Box>
      </Flex>
      <Box display={{ base: 'block', xl:'none' }}>
        <BottomNavBar />
      </Box>
    </Flex>
  )
};


export default Affiliate;