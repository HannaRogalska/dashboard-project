
import {
  useColorMode,
  ColorModeIcon,
  ColorModeButton,
} from "@/components/ui/color-mode";


const ToggleBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
 return (
   <ColorModeButton
     onClick={toggleColorMode}
     bg={colorMode === "dark" ? "#4e4e4e" : "aqua"}
   >
     <ColorModeIcon />
   </ColorModeButton>
 );
}

export default ToggleBtn
