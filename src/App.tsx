import './App.css'
import { Button, HStack } from "@chakra-ui/react";
import { useColorMode, useColorModeValue  } from "@/components/ui/color-mode";

function App() {
  const { toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <HStack>
      <Button onClick={toggleColorMode}>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  );
}

export default App
