import { Box, Spinner, VStack, Flex, Center } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <VStack minH="100vh" justify="space-between">
      <Flex as="header" w="100%" justify="space-between" p="4">
        <Box>LOGO</Box>
        <Flex gap="2">
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="*">Some</NavLink>
        </Flex>
      </Flex>

      <Box as="main" w="100%">
        <Suspense fallback={<Spinner color="brand.500" size="md" />}>
          <Outlet />
        </Suspense>
      </Box>
      <Box as="footer">Footer</Box>
    </VStack>
  );
};

export default Layout;
