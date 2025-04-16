import { Box, Flex, Text, Image, DataList } from '@chakra-ui/react';
import { Link } from 'react-router';
import SideBar from '@/components/SideBar';
import BottomNavBar from '@/components/BottomNavBar';
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
        w='full'
        bg='secondary.400'
      >
        <Flex
            fontFamily='Segoe UI'
            py={{ base:'24px','2xl':'42px' }}
            pl={{ base:'32px','2xl':'64px' }}
            pr='32px'
            w='full'    
            justifyContent='space-between'
        >
            <Box color='white'>
            <Text as='h1' fontSize={{ base: '2.5rem','2xl':'4rem' }} fontWeight={350}>Dashboard</Text>
            <Text as='p' fontSize={{ base: '1rem','2xl':'1.25rem' }} fontWeight={350}>Welcome Back</Text>
            </Box>
            <Flex
                fontFamily='Inter'
                pl='16px'
                bg='secondary.500'
                alignItems='center'
                h='fit-content'
                gap='16px'
                rounded='full'
            >
            <Box bg='red.600' h={{ base: '36px','2xl':'42px' }} w={{ base: '36px','2xl':'42px' }} rounded='full' overflow='hidden'>
                <Image src='' objectFit='cover' size='full' alt='profil'/>
            </Box>
            <Text fontSize={{ base: '0.8rem','2xl':'1rem' }} color='white' fontWeight={700}>
                asdasd.................asdasdasd
            </Text>
            <Box bg='primary.500' px={{ base:'18px','2xl':'24px' }} rounded='full' py={{ base:'14px','2xl':'20px' }}>
                <Text fontSize={{ base: '0.8rem','2xl':'1rem' }} color='secondary.500' fontWeight={700}>Disconnected</Text>
            </Box>
            </Flex>
        </Flex>
        <Flex
          justifyContent='center'
          alignItems='center'
          w='full'
          gap='100px'
        >
          <Box position="relative" w={{ base:'300px','2xl':"420px" }} h={{ base:'300px','2xl':"420px" }}>
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
            <Text color='white' fontWeight={400} fontSize={{ base: '2rem','2xl':'2.5rem' }}>
                General Info
            </Text>
            <DataList.Root orientation="horizontal" mt={{ base:'16px','2xl':'32px' }} mb={{ base:'32px','2xl':'64px' }}>
                {stats.map((item) => (
                <DataList.Item key={item.label} mt={{ base:'2px','2xl':'20px' }} color='white' fontSize={{ base:'1.2rem','2xl':'1.625rem' }} fontWeight={400}>
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
            <Flex gap='32px'>
              <Link to='/'>
                <Flex gap='16px' alignItems='center' px={{ base:'20px','2xl':'40px' }} py={{ base:'12px','2xl':'20px' }} bg='primary.500' rounded='full' w='fit'>
                  <Image src='/icons/buy_nft__active.png'/>
                  <Text color='secondary.500' fontWeight={700} fontSize={{ base:'1rem','2xl':'1.25rem' }}>BUY NFT</Text>
                </Flex>
              </Link>
              <Link to='/'>
                <Flex gap='16px' alignItems='center' px={{ base:'20px','2xl':'40px' }} py={{ base:'12px','2xl':'20px' }} border='1px solid #FFF' rounded='full' w='fit'>
                  <Image src='/icons/earning_root.png'/>
                  <Text color='white' fontWeight={700} fontSize={{ base:'1rem','2xl':'1.25rem' }}>START EARNING</Text>
                </Flex>
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Box 
          mt={{ base:'32px', '2xl':'40px' }}
          mb={{ base: '24px','2xl':'40px' }}
          px={{ base:'32px','2xl':'64px' }}
          overflowY='hidden'
          flex={1}
          rounded='32px'
        >
          <Box
            px={{ base:'28px', '2xl':'56px' }}
            py={{ base:'24px', '2xl':'62px' }}
            h='full'
            w='full'
            rounded='32px'
            bgImage='linear-gradient(179.98deg, #141F33 13.15%, #3B5C99 116.26%)'
          >
            <Box
              className='scrollbar-text-dashboard'
              overflow='auto' 
              h='full'
              w='full'
              textAlign='left'
              pl={{ base:'28px','2xl':'40px' }}
            >
                <Text 
                  as='h3' 
                  fontSize={{ base:'2rem', '2xl':'2.5rem'  }}
                  fontWeight={700}
                  bgImage='linear-gradient(90deg, #FFBB00 0%, #00E3FF 100%)'
                  bgClip="text"
                >About Max Property</Text>
                <Flex
                  flexDir='column'
                  gap='24px' 
                  fontSize={{ base:'1rem','2xl':'1.5rem'  }}
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





