import  LineChartSimple  from "../components/lineChartSimple/LineChartSimple";
import { Box, Heading } from "@chakra-ui/react";


const Dashboard = () => {
  return (
    <Box p="6" minH="100vh">
          <Heading mb="4">Dashboard</Heading>
          <LineChartSimple/>
    </Box>
  );
}

export default Dashboard
