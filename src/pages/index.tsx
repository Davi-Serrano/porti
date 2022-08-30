import {  Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import { SlidePage } from "../components/Slide"

export default function Home() {
   return (
    <Flex
      flexDirection="column"
      justify="space-around"
      align="strat"
    >
         <SlidePage /> 
         
         <Box
            background="#141414"
            p="1%"
            mt="3em"
            w="80%"
          >
            <Text as="h2">Sobre</Text>
            <Text as="p">
               Lorem Ipsum is simply dummy text of
               the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
               the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             </Text>
         </Box>
         
          <Box
            background="#141414"
            p="1%"
            w="80%"
            mt="3em"
            ml="18%"
          >
            <Text as="h2">  Cursos</Text>
            <Flex justify="space-around" fontSize="25px" px="1em">
            <Link href="https://app.rocketseat.com.br/api/certificates/pdf/41a1de6f-883a-435e-8ce6-d1c8fecac4de" isExternal >
              <Image  src="./rocketseat.jpg" alt="JavaScript" h="80px"/>
            </Link>
            <Link href="https://www.udemy.com/certificate/UC-2d2f900b-281d-4e52-9e79-8dc56a9ca4dc" isExternal >
              <Image  src="./figma.jpg" alt="JavaScript" h="80px"/>
            </Link>                 
             </Flex>
         </Box>

         <Box
            background="#141414"
            p="1%"
            w="80%"
            mt="3em"
>
            <Text as="h2">Stacks</Text>
            <Flex justify="space-around" fontSize="25px" px="1em">
                  <Image src="./html.png" alt="HTML" h="80px"/>
                  <Image src="./css.png" alt="CSS" h="80px"/>
                  <Image src="./js.jpg" alt="JavaScript" h="80px"/>
                  <Image src="./react.jpg" alt="ReactJS" h="80px"/>
                  <Image src="./nextjs.jpg" alt="NextJS" h="80px"/>
                  <Image src="./sql.jpg" alt="SQL" h="80px"/>
                  <Image src="./node.png" alt="NodeJS" h="80px"/>
                  <Text>Cypress e Jest</Text>
             </Flex>
         </Box>

        <Flex
          w="100%"
          justify="space-around"
          align="center"
          mt="3em"
          py="1em"
        >

          <Link  w="30%" href="/projetos">
            <Flex
              justify="space-around"
              align="center"
              p="1em"
              border="1px solid gray"
              background="#141414"
              fontWeight="bold"
              borderRadius="16px"

              _hover={{
                cursor: "pointer",
                opacity: "0.7"
              }}
            > 
              Projetos
            </Flex>
          </Link>

          <Link w="30%" href="https://www.linkedin.com/in/davi-serrano-86369a213/" isExternal>
            <Flex
              justify="space-around"
              align="center"
              p="1em"
              border="1px solid gray"
              background="#141414"
              fontWeight="bold"
              borderRadius="16px"
            
              _hover={{
                cursor: "pointer",
                opacity: "0.7"
              }}
            > 
              Linkedin
            </Flex>
          </Link>
        </Flex>

    </Flex>
  )
}
