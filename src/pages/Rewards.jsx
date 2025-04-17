import React, { useState } from "react";
import { Box, Text, Image, Flex, Field, InputGroup, Input, Grid } from "@chakra-ui/react";
import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";
import BottomNavBar from "@/components/BottomNavBar";
import { TfiDownload } from "react-icons/tfi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const items = [
    {id: 1, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
    {id: 2, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
    {id: 3, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
    {id: 4, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
    {id: 5, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
    {id: 6, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
    {id: 7, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
    {id: 8, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
    {id: 9, date:'2025-04-11 / 13:00:00', reason: 'Affiliate Reward', amount: 3, status: true},
  ];

const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
    <InputGroup endElement={
      <Text fontSize={{ base:'14px',md:'20px', '2xl':'26px' }}>
        <FaRegCalendarAlt onClick={onClick} color='white' fontSize='1em' aria-label="Open calendar"/>
      </Text>
    }>
      <Input
        readOnly
        value={value}
        onClick={onClick}
        ref={ref}
        placeholder="Pilih tanggal"
        border="none"
        fontSize='1em'
        textAlign="center"
        bg="transparent"
        color="white"
        _focus={{ 
          outline: 'none',
        }}
      />
    </InputGroup>
  ));

const Rewards = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  return (
    <Flex flexDir={{ base: 'column', xl: 'row' }}>
      <Box w={{ base: 'full', xl:'260px', '2xl':'360px' }}>
        <SideBar active='rewards'/>
      </Box>
      <Flex
         flexDir='column'
         h='100vh'
         minH='100vh'
         maxH='100%'
         pt={{base:'60px', xl: '0'}}
         pb={{ base: '60px', md:'110px', xl: '0' }}
         flex={1}
         bg='secondary.400'
         overflowX='hidden'
         overflowY='hidden'
      >
        <DashboardHeader title='Rewards' />
        <Box
          zIndex={9999}
          mt={{ base:'24px',xl: '32px','2xl':'72px' }}
          ml={{ base:'5%',xl:'32px','2xl':'64px' }}
          mr={{ base:'5%',xl:'32px' }}
        >
          <Flex gap={{ base:'16px',md:'32px','2xl':'48px' }} flexWrap={{ base:'wrap', md:'nowrap' }}>
            <Flex
              py={{ base:'16px',md:'20px' }}
              px={{ base:'20px',md:'24px' }}
              flex={1}
              w='full'
              bg='secondary.500'
              boxShadow={{ base:'0px 0px 8.7px 0px rgba(0, 227, 255, 1)',
                md:'0px 0px 22.2px 0px rgba(0, 227, 255, 1)' }}
              rounded={{ base:'12px',md:'20px' }}
              justifyContent='center'
              alignItems='center'
              gap={{ base:'8px',md:'24px' }}
            >
              <Image src='/icons/gift.svg' alt='gift icon'
                w={{ base:'20px',md:'40px','2xl':'64px' }} h='auto'
              />
              <Box fontWeight={600}>
                <Text color='white' fontSize={{ base:'11px',md:'1rem','2xl':'1.25rem' }}>
                  Total Bonus
                </Text>
                <Text color='primary.500' lineHeight={1} fontSize={{ base:'14px', md:'1.5rem','2xl':'2rem' }}>
                  50000 MPRO
                </Text>
              </Box>
            </Flex>
            <Flex
              py={{ base:'16px',md:'20px' }}
              px={{ base:'20px',md:'24px' }}
              flex={1}
              w='full'
              bg='secondary.500'
              boxShadow={{ base: '0px 0px 8.7px 0px rgba(255, 255, 255, 1)',
                md: '0px 0px 15.1px 0px rgba(255, 255, 255, 1)' }}
              rounded={{ base:'12px',md:'20px' }}
              justifyContent='center'
              alignItems='center'
              gap={{ base:'8px',md:'24px' }}
            >
              <Image src='/icons/money.svg' alt='gift icon'
                w={{ base:'20px',md:'40px','2xl':'64px' }} h='auto'
              />
              <Box fontWeight={600}>
                <Text color='white' fontSize={{ base:'11px',md:'1rem','2xl':'1.25rem' }}>
                  Total Withdraw
                </Text>
                <Text color='white' lineHeight={1} fontSize={{ base:'14px', md:'1.5rem','2xl':'2rem' }}>
                  100 MPRO
                </Text>
              </Box>
            </Flex>
            <Flex
              py={{ base:'16px',md:'20px' }}
              px={{ base:'20px',md:'24px' }}
              flex={2}
              maxW='520px'
              w='full'
              bg='secondary.500'
              boxShadow={{ base:'0px 0px 8.7px 0px rgba(92, 248, 126, 1)',
                md:'0px 0px 20.7px 0px rgba(92, 248, 126, 1)' }}
              rounded={{ base:'12px',md:'20px' }}
              justifyContent='center'
              alignItems='center'
              gap={{ base:'8px',md:'24px' }}
            >
              <Image src='/icons/wallet.svg' alt='gift icon'
                w={{ base:'20px',md:'40px','2xl':'64px' }} h='auto'
              />
              <Box fontWeight={600}>
                <Text color='white' fontSize={{ base:'11px',md:'1rem','2xl':'1.25rem' }}>
                  Remaining Balance
                </Text>
                <Text color='tertiarity.500' lineHeight={1} fontSize={{ base:'14px', md:'1.5rem','2xl':'2rem' }}>
                  4900 MPRO
                </Text>
              </Box>
              <Flex 
                alignItems='center'
                gap='10px'
                color='tertiarity.500' 
                px='16px' 
                py={{ base:'8px',"2xl":'10px' }}
                fontWeight={700} 
                border='2px solid'
                borderColor='tertiarity.500'
                fontSize={{ base:'0.9rem','2xl':'1.1rem' }}
                rounded='8px'
                cursor='pointer'
              >
                <Text fontSize={{ base:'16px', '2xl':'20px' }}>
                  <TfiDownload fontSize='1em'/>
                </Text>
                <Text>Withdraw</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex 
            mt={{ base:'24px',md:'32px' }}
            px={{ base:'16px',md:'40px','2xl':'64px' }}
            py={{ base:'16px', '2xl':'30px' }}
            rounded='32px'
            bg='secondary.500'
            w='full'
            gap={{ base:'16px',md:'48px' }}
            justifyContent='space-between'
            flexWrap={{ base:'wrap', md:'nowrap' }}
          >
            <Box
              border='2px solid #FFFFFF'
              rounded='full'
              w='full'
              px={{ base:'16px',md:'32px','2xl':'56px' }}
              py={{ base:'4px', md:'6px','2xl':'10px' }}
              color='white'
              fontWeight={600}
            >
              <Field.Root orientation="horizontal" fontSize={{ base:'12px',md:'1rem','2xl':"1.25rem" }}>
                <Field.Label  textWrap='nowrap' fontSize='1em'>Start Date :</Field.Label>
                <Box w='full'>
                  <DatePicker
                    selected={selectedStartDate}
                    onChange={(date) => setSelectedStartDate(date)}
                    customInput={<CustomDateInput />}
                    dateFormat="dd-MM-yyyy"
                  />
                </Box>
              </Field.Root>
            </Box>
            <Box
              border='2px solid #FFFFFF'
              rounded='full'
              w='full'
              px={{ base:'16px',md:'32px','2xl':'56px' }}
              py={{ base:'4px', md:'6px','2xl':'10px' }}
              color='white'
              fontWeight={600}
            >
              <Field.Root orientation="horizontal" fontSize={{ base:'12px',md:'1rem','2xl':"1.25rem" }}>
                <Field.Label textWrap='nowrap' fontSize='1em'>End Date :</Field.Label>
                <Box w='full'>
                  <DatePicker
                    selected={selectedEndDate}
                    onChange={(date) => setSelectedEndDate(date)}
                    customInput={<CustomDateInput />}
                    dateFormat="dd-MM-yyyy"
                  />
                </Box>
              </Field.Root>
            </Box>
            <Flex
              rounded='full'
              alignItems='center'
              justifyContent='center'
              px={{ base:'18px',"2xl":'24px' }}
              py={{ base:'10px','2xl':'10px' }}
              w={{ base:'full', md:'1/2' }}
              maxW={{ base:'full', md:'180px' }}
              fontWeight={700}
              fontSize={{ base:'12px',md:'1rem','2xl':"1.25rem" }}
              bg='tertiarity.500'
              color='secondary.500'
            >
              <Text>Find</Text>
            </Flex>
          </Flex>
        </Box>
        <Box
          className='local-scrollbar dir-ltr' 
          mr={{ base:'5%',xl:'32px' }}
          mt={{ base:'24px',md:'32px' }} 
          pr={{ base:'0',xl:'16px' }} 
          pl={{ base:'5%',xl:'32px','2xl':'64px' }}
          maxH='480px'
          overflowY="auto" 
          textAlign='center'
        >
          <Box
            bg='secondary.400'
            position="sticky"
            top="0"
            textAlign='center'
            zIndex="docked"
            pb='10px'
          >
            <Grid
              templateColumns="0.5fr minmax(100px, 2fr) 1fr 1fr 1fr"
              bg="secondary.500"
              color="white"
              fontSize={{ base:'10px',xl:'1rem','2xl':'1.25rem' }}
              gap='10px'
              px={{ base:'10px',xl:'32px', '2xl': '56px' }}
              py={{ base:'10px', '2xl':'16px' }}
              fontWeight={600}
              rounded='full'
            >
              <Text>No</Text>
              <Text>Date</Text>
              <Text>Reason</Text>
              <Text>Amount</Text>
              <Text>Status</Text>
            </Grid>
          </Box>
          {items.map((item, i) => (
            <Grid
              key={i}
              mb='10px'
              templateColumns="0.5fr minmax(100px, 2fr) 1fr 1fr 1fr"
              fontWeight={600}
              color='white'
              fontSize={{ base:'8px',xl:'1rem','2xl':'1.5rem' }}
              gap='10px'
              py={{ base:'14px','2xl':'16px' }}
              px={{ base:'10px',xl:'32px', '2xl': '56px' }}
              alignItems="center"
              _hover={{ bg: "blue.900" }}
              bgImage='linear-gradient(269.01deg, #141F33 39.15%, #3B5C99 130.16%)'
              rounded='full'
              textAlign='center'
            >
              <Text>{i + 1}.</Text>
              <Text isTruncated>{item.date}</Text>
              <Text>{item.reason}</Text>
              <Text color="primary.500">{item.amount} MPRO</Text>
              <Flex alignItems='center' gap={{ base:'3px',xl:'10px','2xl':'16px' }} justifyContent='center'>
                {item.status && 
                <>
                  <Text as='span'>Success</Text>
                  <Text as='span' color='tertiarity.500'>
                    <FaCheckCircle />
                  </Text>
                </>}
              </Flex>
            </Grid>
          ))}
        </Box>
      </Flex>
      <Box display={{ base: 'block', xl:'none' }}>
        <BottomNavBar />
      </Box>
    </Flex>
  )
}

export default Rewards;
