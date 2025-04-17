import React from "react";
import { Text, InputGroup, Input, Grid } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";

const DateInput = React.forwardRef(({ value, onClick }, ref) => (
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

export default DateInput;