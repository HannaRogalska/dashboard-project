import { describe, it, expect, beforeAll } from "vitest";
import { screen, render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { Provider } from "../components/ui/provider";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }),
  });
    class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }

    Object.defineProperty(window, "ResizeObserver", {
      writable: true,
      configurable: true,
      value: ResizeObserver,
    });
});

describe("Dashboard", () => {
  it("render", () => {
    render(
      <Provider>
        <Dashboard />
      </Provider>
    );
  });
});
