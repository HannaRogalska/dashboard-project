import { describe, it } from "vitest";
import {  render } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { Provider } from "../components/ui/provider";

describe("Dashboard", () => {
  it("render", () => {
    render(
      <Provider>
        <Dashboard />
      </Provider>
    );
  });
});
