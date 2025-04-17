import { Flex, Text, Box } from '@chakra-ui/react';
import BtnProfil from '@/components/BtnProfil';

const DashboardHeader = ({title, subTitle}) => {
  return (
    <Flex
      fontFamily='Segoe UI Custom'
      fontWeight={200}
      py={{ base:'24px','2xl':'42px' }}
      pl={{ base:'32px','2xl':'64px' }}
      pr='32px'
      w='full'    
      justifyContent='space-between'
    >
      <Box color='white' textAlign={{ base:'center', xl:'left' }} w='full'>
        <Text as='h1' fontSize={{ base: '2.5rem','2xl':'4rem' }} lineHeight={{ base:1, xl:1.6 }} fontWeight={350}>
          {title}
        </Text>
        <Text as='p' fontSize={{ base: '1rem','2xl':'1.25rem' }} fontWeight={350}>
          {subTitle ? subTitle : ''}
        </Text>
      </Box>
      <Box display={{ base: 'none', xl: 'block' }}>
        <BtnProfil />
      </Box>
    </Flex>
  )
}

export default DashboardHeader;
