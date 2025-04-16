import { Flex, Text, Image } from '@chakra-ui/react';

const ButtonSideBar = ({icon, title, status}) => {
    const variants = {
        root: {
            bgColor: "transparent",
            color: "white",
            // bgHover: "dark.100",
            // colorHover: "dark.950"
        },
        active: {
            bgColor: "primary.500",
            color: "secondary.500",
            // bgHover: "primary.500",
            // colorHover: "white"
        },
    }
    const currentVariant = variants[status];

    return (
        <Flex
            fontFamily='Segoe UI'
            maxH="64px"
            px={{ base: '12px', md:"28px" }}
            py={{ base: '10px', md:"16px" }}
            w="100%"
            overflow="hidden"
            gap={{ base: '4px', md:"8px" }}
            alignItems="center"
            bgColor={currentVariant.bgColor}
            color={currentVariant.color}
            transition="all 0.2s ease-in"
            cursor="pointer"
            fontSize={{ base: '0.8rem', md:'1rem', '2xl':"20px" }}
            // _hover={{ 
            //     bgColor: currentVariant.bgHover,
            //     color: currentVariant.colorHover
            // }}
        >
            <Image src={`/icons/${icon}`} height={{ base: '14px', md: 'auto' }}/>
            <Text fontWeight={{ base: '500', md:"600" }} textWrap="nowrap">
                {title}
            </Text>
        </Flex>
    )
};

export default ButtonSideBar;
