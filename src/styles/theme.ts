import { extendTheme } from "@chakra-ui/react"

export const  theme = extendTheme({
    fonts: {
      heading: "Roboto",
      body: "Roboto",
    },
    styles: {
        global : {
            a:{
                color: "black",
                textDecoration: "none",
            },
            body:{
                bg: '#ffffff',
                margin: 0,
                color: 'gray.50',
                a:{
                    textDecoration: "none"
                }
            },
        }
    }
})