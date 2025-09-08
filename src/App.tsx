import './App.css'
import {  HStack } from "@chakra-ui/react";
import {
  useColorMode,
  ColorModeIcon,
  ColorModeButton,
} from "@/components/ui/color-mode";

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack bg='brand.500'>
      <ColorModeButton onClick={toggleColorMode}>
        <ColorModeIcon />
      </ColorModeButton>
    </HStack>
  );
}

export default App
