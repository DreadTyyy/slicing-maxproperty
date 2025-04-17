import { Box, Flex, Text, Image, DataList } from '@chakra-ui/react';
import { Link } from 'react-router';
import SideBar from '@/components/SideBar';
import BottomNavBar from '@/components/BottomNavBar';
import DashboardHeader from '@/components/DashboardHeader';
import '@/style/scrollbar.css';

const Dashboard = () => {
  const stats = [
    { label: "Total NFT Staked", value: "100 NFT", diff: -12},
    { label: "Total Reward", value: "1000 MPRO", diff: 12 },
  ]

  return (
    <Flex flexDir={{ base: 'column', xl: 'row' }}>
      <Box w={{ base: 'full', xl:'260px', '2xl':'360px' }} >
        <SideBar active='dashboard'/>
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
        <DashboardHeader title='Dashboard' subTitle='Welcome back'/>
        <Flex
          flexDir={{ base: 'column', xl: 'row' }}
          justifyContent='center'
          alignItems='center'
          w='full'
          gap={{ base:'36px', xl:'100px' }}
        >
          <Box 
            position="relative" 
            w={{ base:'240px', xl:'300px','2xl':"420px" }} 
            h={{ base:'240px', xl:'300px','2xl':"420px" }}
          >
            <Box
                w="full"
                h="full"
                bg="secondary.500"
                borderRadius="full"
                position="relative"
                zIndex={1}
            />
            <Image
                src="dashboard-img.png"
                alt="NFT Image"
                width="100%"
                height="100%"
                objectFit="contain"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%) scale(1.2)"
                zIndex={2}
                pointerEvents="none"
            />
          </Box>
          <Box>
            <Text textAlign={{ base:'center', xl:'left' }} color='white' fontWeight={400} fontSize={{ base: '1.5rem', xl:'2rem','2xl':'2.5rem' }}>
                General Info
            </Text>
            <DataList.Root orientation="horizontal" mt={{ base:'16px','2xl':'32px' }} mb={{ base:'32px','2xl':'64px' }} placeItems={{ base:'center', xl:'start' }}>
                {stats.map((item) => (
                <DataList.Item key={item.label} mt={{ base:'0px','2xl':'20px' }} w='fit-content' color='white' fontSize={{ base:'1rem', xl:'1.2rem','2xl':'1.625rem' }} fontWeight={400}>
                    <DataList.ItemLabel color='white'>
                    {item.label}
                    </DataList.ItemLabel>
                    <DataList.ItemValue>
                    :
                    <Text fontWeight={700}>{item.value}</Text>
                    </DataList.ItemValue>
                </DataList.Item>
                ))}
            </DataList.Root>
            <Flex gap={{ base:'16px', xl:'32px' }} alignItems='center' justifyContent='center'>
              <Link to='/market'>
                <Flex gap={{ base:'10px',xl:'16px' }} alignItems='center' px={{ base:'16px',xl:'20px','2xl':'40px' }} py={{ base:'12px','2xl':'20px' }} bg='primary.500' rounded='full' w='fit'>
                  <Image src='/icons/buy_nft__active.png' alt='icon buy nft'/>
                  <Text color='secondary.500' fontWeight={700} fontSize={{ base:'0.8rem', xl:'1rem','2xl':'1.25rem' }}>BUY NFT</Text>
                </Flex>
              </Link>
              <Link to='/earning'>
                <Flex gap={{ base:'10px',xl:'16px' }} alignItems='center' px={{ base:'16px',xl:'20px','2xl':'40px' }} py={{ base:'12px','2xl':'20px' }} border='1px solid #FFF' rounded='full' w='fit'>
                  <Image src='/icons/earning_root.png' alt='icon earning'/>
                  <Text color='white' fontWeight={700} fontSize={{ base:'0.8rem', xl:'1rem','2xl':'1.25rem' }}>START EARNING</Text>
                </Flex>
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Box 
          mt={{ base:'32px', '2xl':'40px' }}
          mb={{ base: '24px','2xl':'40px' }}
          px={{ base:'5%', xl:'32px','2xl':'64px' }}
          rounded='32px'
          h={{ base:'260px', '2xl': 'full' }}
          maxH='500px'
        >
          <Box
            px={{ base:'0px',xl:'28px', '2xl':'56px' }}
            pr={{ base:'20px', xl:'0px' }}
            py={{ base:'24px', '2xl':'62px' }}
            h='full'
            w='full'
            rounded='32px'
            bgImage='linear-gradient(179.98deg, #141F33 13.15%, #3B5C99 116.26%)'
          >
            <Box
              className='local-scrollbar'
              overflow='auto' 
              h='full'
              w='full'
              textAlign={{ base:'center',xl:'left' }}
              pl={{ base:'28px','2xl':'40px' }}
            >
                <Text 
                  as='h3' 
                  fontSize={{ base:'1.5rem', xl:'2rem', '2xl':'2.5rem'  }}
                  fontWeight={700}
                  bgImage='linear-gradient(90deg, #FFBB00 0%, #00E3FF 100%)'
                  bgClip="text"
                >About Max Property</Text>
                <Flex
                  flexDir='column'
                  gap='24px' 
                  fontSize={{ base:'0.8rem', xl:'1rem','2xl':'1.5rem'  }}
                  fontWeight={400} 
                  mt={{ base:'10px','2xl':'24px' }}
                  bgImage='linear-gradient(89.84deg, #FDBB02 -2.44%, #67D398 98.61%)'
                  bgClip='text'
                >
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto esse voluptatibus odit odio rerum tempore nisi vel dignissimos eveniet velit sit, sunt fuga ipsum blanditiis perspiciatis ea dolore debitis nobis quibusdam consequuntur dolorum illo! Eum distinctio iusto atque enim, numquam ab, eius deleniti, rem ex iure tenetur quaerat vitae exercitationem!</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto esse voluptatibus odit odio rerum tempore nisi vel dignissimos eveniet velit sit, sunt fuga ipsum blanditiis perspiciatis ea dolore debitis nobis quibusdam consequuntur dolorum illo! Eum distinctio iusto atque enim, numquam ab, eius deleniti, rem ex iure tenetur quaerat vitae exercitationem!</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto esse voluptatibus odit odio rerum tempore nisi vel dignissimos eveniet velit sit, sunt fuga ipsum blanditiis perspiciatis ea dolore debitis nobis quibusdam consequuntur dolorum illo! Eum distinctio iusto atque enim, numquam ab, eius deleniti, rem ex iure tenetur quaerat vitae exercitationem!</Text>
                </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box display={{ base: 'block', xl:'none' }}>
        <BottomNavBar />
      </Box>
    </Flex>
  )
};


export default Dashboard;





