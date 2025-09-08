import './App.css'
import {  HStack, Box } from "@chakra-ui/react";
import {
  LightMode,
  DarkMode,
  useColorMode,
  ColorModeIcon,
  ColorModeButton,
} from "@/components/ui/color-mode";

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      
      <ColorModeButton onClick={toggleColorMode}>
        <ColorModeIcon />
      </ColorModeButton>
    </HStack>
  );
}

export default App
