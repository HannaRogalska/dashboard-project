
import {
  useColorMode,
  ColorModeIcon,
  ColorModeButton,
} from "@/components/ui/color-mode";


const ToggleBtn = () => {
 const { toggleColorMode } = useColorMode();
 return (
   <ColorModeButton onClick={toggleColorMode}>
     <ColorModeIcon />
   </ColorModeButton>
 );
}

export default ToggleBtn
