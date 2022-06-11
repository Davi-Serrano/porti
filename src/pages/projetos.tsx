import { Flex, Box, Text, Image, Input } from '@chakra-ui/react'

export default function Contanto(){
    return(
        <Flex
            mx="auto"
            mt="2em"
            w="80%"
            color="#C5C5C5"
        >
            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
            >
                <Image 
                    w="90%"
                    alt="imagem do projeto"
                />

                <Box>
                    <Text>NextJs</Text>
                    <Text>TypeScript</Text>
                    <Text>FaunaDB</Text>
                    <Text>ChakraUI</Text>
                </Box>
            </Flex>

            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
            >
                <Image 
                    src=""
                    w="90%"
                    alt="imagem do projeto"
                />

                <Box>
                    <Text>NextJs</Text>
                    <Text>TypeScript</Text>
                    <Text>FaunaDB</Text>
                    <Text>ChakraUI</Text>
                </Box>
            </Flex>

            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
            >
                <Image 
                    w="90%"
                    alt="imagem do projeto"
                />

                <Box>
                    <Text>NextJs</Text>
                    <Text>TypeScript</Text>
                    <Text>FaunaDB</Text>
                    <Text>ChakraUI</Text>
                </Box>
            </Flex>
        </Flex>
    )
}
