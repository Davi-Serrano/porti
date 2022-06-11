import { Flex, Text, Input } from '@chakra-ui/react'

export default function Contanto(){
    return(
        <Flex
            flexDir="column"
            justify="space-around"
            align="start"
            color="#141414"
            p="1em"
            fontWeight="bold"
        >
            <Text as="h2" mx="auto">Contato</Text>

            <Text>Seu Email :</Text>
            <Input w="80%" />

            <Text>Assunto :</Text>
            <Input w="80%"/>

            <Text>Mensagem :</Text>
            <Input w="80%" h="200px"/>
        </Flex>
    )
}
