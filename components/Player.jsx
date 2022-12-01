import { createTheme, NextUIProvider } from "@nextui-org/react"

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  }
})

const Player = () => {
  return (
    <NextUIProvider theme={darkTheme}>
      <Player />
    </NextUIProvider>
  )
}

export default Player;