import { Flex, Text, Link } from "@chakra-ui/react"

export function Header(){
    return(
        <Flex
            justify="space-between"
            align="center"
            background="#000000"
            px="1.5em"
            fontSize="24px"
        >
            <Flex>
                <Text px="1em">Davi Serrano</Text>
            </Flex>

            <Flex>
                <Link href="/contato"> <Text px="1em">Contato</Text> </Link> 
                <Link href="/projetos"> <Text px="1em">Projetos</Text> </Link> 
                <Link href="https://www.linkedin.com/in/davi-serrano-86369a213/" isExternal> <Text px="1em">Linkedin</Text> </Link> 
            </Flex>
        </Flex>
    )
}
