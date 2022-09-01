import { Flex, Box, Text, Image, Input, Link } from '@chakra-ui/react'

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
                    <Text as="h4" mb="0">CBANK</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px">Um banco que te possibilita comprar e vender criptomoedas</Text>


                <Image 
                    src="./react.jpg"
                    w="90%"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" px=".5em"  >NextJs</Text>
                    <Text textAlign="center" px=".5em"  >TypeScript</Text>
                    <Text textAlign="center" px=".5em"  >FaunaDB</Text>
                    <Text textAlign="center" px=".5em"  >ChakraUI</Text>
                    <Text textAlign="center" px=".5em"  >Figma</Text>


                    <Link textDecoration="none" w="100%" href="#" isExternal>
                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
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
                    <Text as="h4" mb="0">Change Numbers</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px">Escolhe seus números da loteria <b> com estilo</b></Text>


                <Image 
                    src="./react.jpg"
                    w="90%"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" >HTML</Text>
                    <Text textAlign="center" >CSS</Text>
                    <Text textAlign="center" >JavaScript</Text>

                    <Link textDecoration="none" w="100%" href="#" isExternal>
                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
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
                    <Text as="h4" mb="0">Word Math</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px"> Aplicação que resolve problemas matematicos</Text>


                <Image 
                    src="./react.jpg"
                    w="90%"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" >React</Text>
                    <Text textAlign="center" >StyledComponents</Text>
                    <Text textAlign="center" >ChartJS</Text>

                    <Link textDecoration="none" w="100%" href="#" isExternal>
                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
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
                    <Text as="h4" mb="0">Desencanto</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px"> Um site divertido feito por um fã</Text>


                <Image 
                    src="./react.jpg"
                    w="90%"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" >HTML</Text>
                    <Text textAlign="center" >CSS</Text>
                    <Text textAlign="center" >JavaScript</Text>
                    <Text textAlign="center" >Figma</Text>

                    <Link textDecoration="none" w="100%" href="#" isExternal>
                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
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
                    <Text as="h4" mb="0">Quiz Test</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px"> Um site feito como desafio, aonde salva a pontuação jogador</Text>


                <Image 
                    src="./react.jpg"
                    w="90%"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" >React</Text>
                    <Text textAlign="center" >StyledComponents</Text>
                    

                    <Link textDecoration="none" w="100%" href="#" isExternal>
                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
                </Flex>
            </Flex>


        </Flex>
    )
}
