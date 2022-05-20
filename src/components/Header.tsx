import { Flex, Text } from "@chakra-ui/react"

export function Header(){
    return(
        <Flex
            justify="space-between"
            align="center"
            background="#000000"
            px="1em"
        >
            <Flex>
                <Text>Davi Serrano</Text>
            </Flex>

            <Flex>
                <Text>Contanto</Text>
                <Text>Projetos</Text>
                <Text>Linkedin</Text>
            </Flex>
        </Flex>
    )
}
