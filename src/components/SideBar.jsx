import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router';
import ButtonSideBar from '@/components/ButtonSideBar';
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from 'react';

const SideBar = ({active}) => {
    const [isOpen, setIsOpen] = useState(false);
    const icons = {
      dashboard: ['dashboard_active.png', 'dashboard_root.png'],
      affiliate: ['affiliate_active.png', 'affiliate_root.png'],
      buy_nft: ['buy_nft_active.png', 'buy_nft_root.png'],
      earning: ['earning_active.png', 'earning_root.png'],
      rewards: ['rewards_active.png', 'rewards_root.png'],
      collection: ['collection_active.png', 'collection_root.png'],
      dividend_share: ['dividend_share_active.png', 'dividend_share_root.png'],
    } 

    const toggleMenu = () => {
        setIsOpen(prev => !prev)
    }

    return (
      <Box 
        display='flex'
        flexDir={{ base: 'row', xl:'column' }}
        justifyContent='space-between'
        alignItems={{ base: 'center', xl: 'normal' }}
        w={{ base: 'full', xl:'260px', '2xl':'360px' }} 
        h={{ base: '100%', xl: '100vh' }}
        bg='secondary.500'
      >
        <Box>
          <Box px={{ base: '20px', xl:'36px' }} py='24px'>
          <Image src='/MPRO LOGO 1 5.png' alt='logo Max Property' h={{ base: '36px', md:'56px', xl:'70px', '2xl':'99px' }}/>
          </Box>
          <Box display={{ base: 'none', xl: 'block' }} mt={{ base: '24px', '2xl':'74px' }}>
          <Link to='/dashboard'>
            <ButtonSideBar icon={active == 'dashboard' ? icons.dashboard[0]:icons.dashboard[1]} status={active == 'dashboard' ? 'active':'root'} title='Dashboard' />
          </Link>
          <Link to='/affiliate'>
            <ButtonSideBar icon={active == 'affiliate' ? icons.affiliate[0]:icons.affiliate[1]} status={active == 'affiliate' ? 'active':'root'} title='Affiliate' />
          </Link>
          <Link to=''>
            <ButtonSideBar icon={active == 'buy_nft' ? icons.buy_nft[0]:icons.buy_nft[1]} status={active == 'buy_nft' ? 'active':'root'} title='Buy NFT' />
          </Link>
          <Link to=''>
            <ButtonSideBar icon={active == 'earning' ? icons.earning[0]:icons.earning[1]} status={active == 'earning' ? 'active':'root'} title='Earning' />
          </Link>
          <Link to=''>
            <ButtonSideBar icon={active == 'rewards' ? icons.rewards[0]:icons.rewards[1]} status={active == 'rewards' ? 'active':'root'} title='Rewards' />
          </Link>
          <Link to=''>
            <ButtonSideBar icon={active == 'collection' ? icons.collection[0]:icons.collection[1]} status={active == 'collection' ? 'active':'root'} title='Collection' />
          </Link>
          <Link to=''>
            <ButtonSideBar icon={active == 'dividend_share' ? icons.dividend_share[0]:icons.dividend_share[1]} status={active == 'dividend_share' ? 'active':'root'} title='Dividend Share' />
          </Link>
          </Box>
        </Box>
        <Box
          display={{ base: 'none', xl: 'flex' }}
          mb={{ base: '48px', '2xl':'74px' }}
          placeContent='center'
          alignItems='center'
          fontSize={{ base: '16px', '2xl':'20px' }}
          color='white'
          gap='8px'
        >
          <FaRegCircleUser />
          <Text fontWeight="600" textWrap="nowrap">
            Steve Andre
          </Text>
        </Box>

        {/* Mobile nav */}
        <Box position='relative' display={{ base: 'block', xl:'none' }}>
          <Box 
            position='relative' 
            zIndex={9999} 
            px='28px' 
            display='flex' 
            flexDir='column' 
            gap='4px'
            onClick={() => toggleMenu()}>
            <Box h='2px' w='24px' bg='white'></Box>
            <Box h='2px' w='24px' bg='white'></Box>
            <Box h='2px' w='24px' bg='white'></Box>
          </Box>
          <Box 
            position='absolute' 
            pt='24px' 
            pb='16px' 
            pr='16px'
            right={isOpen ? '0px' : '-200px'} 
            top='0' 
            w={{ base: '140px', md: '200px' }}
            bg='secondary.500'
            rounded='24px 0 0 24px'
            transition='all 0.2s ease-in'
          >
            <Link to=''>
                <ButtonSideBar icon={icons.dividend_share[1]} status={'root'} title='Dividend Share' />
            </Link>
            <Link to=''>
                <ButtonSideBar icon={icons.rewards[1]} status={'root'} title='Rewards' />
            </Link>
            <Link to=''>
                <ButtonSideBar icon={icons.affiliate[1]} status={'root'} title='Affiliate' />
            </Link>
          </Box>
        </Box>
      </Box>
    )
  };

export default SideBar;
