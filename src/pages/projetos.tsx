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
                border="1px solid black"
                p=".5em"
                m="2em"
            >
                    <Text as="h4" mb="0">CBANK</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px">Um banco que te possibilita comprar e vender criptomoedas</Text>


                <Image 
                    src="./cbank.jpg"
                    w="250px"
                    h="250px"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" px=".5em"  >NextJs</Text>
                    <Text textAlign="center" px=".5em"  >TypeScript</Text>
                    <Text textAlign="center" px=".5em"  >FaunaDB</Text>


                    <Link textDecoration="none" w="100%" href="https://cbank-davi-serrano.vercel.app/" isExternal>
                        
                        <Text textAlign="center" w="100%">Acessar o Site</Text>
                    </Link>

                    <Link textDecoration="none" w="100%" href="https://github.com/Davi-Serrano/Cbank" isExternal>

                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
                </Flex>
            </Flex>

            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
                border="1px solid black"
                p=".5em"
                m="2em"
            >
                    <Text as="h4" mb="0">Change Numbers</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px">Escolhe seus números da loteria <b> com estilo</b></Text>


                <Image 
                    src="./sorte.jpg"
                    w="250px"
                    h="250px"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" >HTML</Text>
                    <Text textAlign="center" >CSS</Text>
                    <Text textAlign="center" >JavaScript</Text>

                    <Link textDecoration="none" w="100%" href="https://sua-sorteloteria.netlify.app/" isExternal>
                        
                        <Text textAlign="center" w="100%">Acessar o Site</Text>
                    </Link>

                    <Link textDecoration="none" w="100%" href="https://github.com/Davi-Serrano/NumerosDaLoteria" isExternal>

                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
                </Flex>
            </Flex>

            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
                border="1px solid black"
                p=".5em"
                m="2em"
            >
                    <Text as="h4" mb="0">Word Math</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px"> Aplicação que resolve problemas matematicos</Text>


                <Image 
                    src="./wmath.jpg"
                    w="250px"
                    h="250px"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" >React</Text>
                    <Text textAlign="center" >StyledComponents</Text>
                    <Text textAlign="center" >ChartJS</Text>
                    <Link textDecoration="none" w="100%" href="https://wmathexercices.netlify.app/" isExternal>
                        
                        <Text textAlign="center" w="100%">Acessar o Site</Text>
                    </Link>

                    <Link textDecoration="none" w="100%" href="https://github.com/Davi-Serrano/Word-Math" isExternal>

                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
                </Flex>
            </Flex>

            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
                border="1px solid black"
                p=".5em"
                m="2em"
            >
                    <Text as="h4" mb="0">Desencanto</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px"> Um site divertido feito por um fã</Text>


                    <Image 
                    src="./desf4.jpg"
                    w="250px"
                    h="250px"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" >HTML</Text>
                    <Text textAlign="center" >CSS</Text>
                    <Text textAlign="center" >JavaScript</Text>
                    <Text textAlign="center" >Figma</Text>

                    <Link textDecoration="none" w="100%" href="https://desencantositef4.netlify.app" isExternal>
                        
                        <Text textAlign="center" w="100%">Acessar o Site</Text>
                    </Link>

                    <Link textDecoration="none" w="100%" href="https://github.com/Davi-Serrano/Desencanto-F4" isExternal>

                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
                </Flex>
            </Flex>
            
            <Flex 
                flexDir="column"
                justify="space-around"
                align="center"
                border="1px solid black"
                p=".5em"
                m="2em"
            >
                    <Text as="h4" mb="0">Balanço e Razonetes</Text>
                    <Text fontSize="smaller" my="0" textAlign="center" maxW="250px"> Um site que ajuda na craição de Balanço, Balancete e Razonete</Text>


                    <Image 
                    src="./adm.jpg"
                    w="250px"
                    h="250px"
                    alt="imagem do projeto"
                />

                <Flex flexWrap="wrap" justify="space-around"  maxW="300px">
                    <Text textAlign="center" >NodeJS</Text>
                    <Text textAlign="center" >MongoDB</Text>
                    

                    <Link textDecoration="none" w="100%" href="https://github.com/Davi-Serrano/AdminTop" isExternal>
                        
                        <Text textAlign="center" w="100%">Acessar o Site</Text>
                    </Link>

                    <Link textDecoration="none" w="100%" href="https://github.com/Davi-Serrano/AdminTop" isExternal>

                        <Text textAlign="center" w="100%">Ver mais detalhes</Text>
                    </Link>
                </Flex>
            </Flex>


        </Flex>
    )
}
