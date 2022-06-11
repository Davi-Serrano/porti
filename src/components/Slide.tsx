import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

export function SlidePage(){
    const myBackground = ["red", "green", "blue"]
    const [ Item, setItem] =  useState(0)

      function handleChangeBackGroundColor(){
        if( Item > 1){
            setItem(0)
        }  else {
            setItem(Item + 1)
        }
      }

    return(
        <Flex
            flexDir="column"
            justify="start"
            align="space-around"
            background={myBackground[Item]}
            mt="1em"
            mx="auto"
            px="1em"
            h="700px"
            w="80%"
        >
            <Text mt="2em">Projetos</Text>

            <Text mt="2em">
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book.
            </Text>

            <Flex
                onClick={handleChangeBackGroundColor}
            >
                Outra Página
            </Flex>
         </Flex>
    )
}
