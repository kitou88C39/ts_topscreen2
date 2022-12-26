import {
  Stack,
  Flex,
  //Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import image from '../image/work_chat.png';

export default function Upperscreen() {
  return (
    <Flex
      w={'full'}
      h={'60vh'}
      backgroundImage={image}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.500, transparent)'}
      >
        <Stack maxW={'5xl'} align={'flex-start'} spacing={10}>
          <Text
            color={'white'}
            fontWeight={800}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
          >
            知り得た情報を速やかに投稿しよう
          </Text>
          {/* <Stack direction={'row'}>
            <Button
              bg={'green.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'green.600' }}
            >
              SignUp
            </Button>
            <Button
              bg={'whiteAlpha.600'}
              rounded={'full'}
              color={'black'}
              _hover={{ bg: 'whiteAlpha.900' }}
            >
              LogIn
            </Button>
          </Stack> */}
        </Stack>
      </VStack>
    </Flex>
  );
}
