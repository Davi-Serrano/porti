import { Flex, Text } from "@chakra-ui/react"

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
                <Text px="1em">Contato</Text>
                <Text px="1em">Projetos</Text>
                <Text px="1em">Linkedin</Text>
            </Flex>
        </Flex>
    )
}
