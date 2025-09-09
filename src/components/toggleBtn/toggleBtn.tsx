
import {
  useColorMode,
  ColorModeIcon,
  ColorModeButton,
} from "@/components/ui/color-mode";


const toggleBtn = () => {
 const { toggleColorMode } = useColorMode();
 return (
   <ColorModeButton onClick={toggleColorMode}>
     <ColorModeIcon />
   </ColorModeButton>
 );
}

export default toggleBtn
