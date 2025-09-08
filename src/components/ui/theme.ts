import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f6ff" },
          100: { value: "#bfeaff" },
          500: { value: "#3182ce" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
