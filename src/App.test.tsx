import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider";
import { Suspense } from "react";
import App from "./App";


describe("render app", () => {
    it("render dashboard", async () => {
      render(
        <BrowserRouter>
          <Provider>
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>
          </Provider>
        </BrowserRouter>
      );
      const app = await screen.findByRole("heading", { name: "Dashboard" });
      console.log(app);
      expect(app).toBeInTheDocument()
        
    });
})