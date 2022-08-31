import { Flex, Box, Text, Image, Input } from '@chakra-ui/react'

export default function Contanto(){
    return(
        <Flex
            justify="space-around"
            align="center"
            flexWrap="wrap"
            mx="auto"
            mt="2em"
            w="100%"
            color="#000"
        >
            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
                border="1px solid red"
                p=".5em"
                m="2em"
            >
                <Image 
                    src="./react.jpg"
                    w="90%"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap"  maxW="350px">
                    <Text textAlign="center" w="50%">NextJs</Text>
                    <Text textAlign="center" w="50%">TypeScript</Text>
                    <Text textAlign="center" w="50%">FaunaDB</Text>
                    <Text textAlign="center" w="50%">ChakraUI</Text>
                    <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                </Flex>
            </Flex>

            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
                border="1px solid red"
                p=".5em"
                m="2em"
            >
                <Image 
                    src="./react.jpg"
                    w="90%"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap"  maxW="350px">
                    <Text textAlign="center" w="50%">NextJs</Text>
                    <Text textAlign="center" w="50%">TypeScript</Text>
                    <Text textAlign="center" w="50%">FaunaDB</Text>
                    <Text textAlign="center" w="50%">ChakraUI</Text>
                    <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                </Flex>
            </Flex>

            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
                border="1px solid red"
                p=".5em"
                m="2em"
            >
                <Image 
                    src="./react.jpg"
                    w="90%"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap"  maxW="350px">
                    <Text textAlign="center" w="50%">NextJs</Text>
                    <Text textAlign="center" w="50%">TypeScript</Text>
                    <Text textAlign="center" w="50%">FaunaDB</Text>
                    <Text textAlign="center" w="50%">ChakraUI</Text>
                    <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
