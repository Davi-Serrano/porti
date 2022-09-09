import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

export function SlidePage(){

    return(
        <Flex
            flexDir="column"
            justify="start"
            align="space-around"
            bg="#000"
            mt="1em"
            mx="auto"
            px="1em"
            h="700px"
            w="80%"
            fontWeight="bold"
            color="white"
            border="1px solid"
        >
            <Text mt="2em" mb="0">Sobre Mim</Text>
            <Text >
                Sou um programdor que consegue achar o caminho para a resolução de um problema 
                quando necessário, seja pesquisando na documnetação, stackoverflow ou perguntando para alguém com mais experiência.<br></br>
                Já domino os conceitos básicos da programação como POO, estrtura de dados e análise de algoritimos.
                
            </Text>

            <Text mt="2em" mb="0">Projetos</Text>
            <Text >
                Todos os projetos nesse protifólio foram pensados e programados por mim,
                desde o design até o deploy.
            </Text>

            <Text mt="2em" mb="0">Experiêcia Profissional</Text>
            <Text >
                Ja desenvovli projetos para clientes do marketing digital, como freelancer cuidei desde de o design da aplicação
                até o deploy da aplicação que foi feito na netlify. Com o resultado fui contratado para desenvolver a página de captação de leads
                de outro produto aonde todos os meus resultado final foram tatotalmente aprovado.
            </Text>

           
         </Flex>
    )
}
