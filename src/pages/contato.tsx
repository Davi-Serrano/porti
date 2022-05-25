import { Flex, Text, Input } from '@chakra-ui/react'

export default function Contanto(){
    return(
        <Flex
            FlexDir="column"
            justify="space-around"
            align="center"
            color="#C5C5C5"
        >
            <Text mx="auto">Contato</Text>

            <Text>Seu Email :</Text>
            <Input />

            <Text>Assunto :</Text>
            <Input />

            <Text>Mensagem :</Text>
            <Input />
        </Flex>
    )
}
