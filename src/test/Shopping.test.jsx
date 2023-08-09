import { render, screen, waitFor } from "@testing-library/react";
import Shopping from "../components/Shopping";
import { describe, expect, it } from "vitest";

describe("shopping", () => {
  it("renders a shopping component that shows a loading screen, then shows the items", async () => {
    render(<Shopping />);

    expect(screen.getByText(/loading/i).textContent).toBe("Loading...");

    await waitFor(
      () => {
        const content = screen.getByText(/content/i).textContent;
        expect(content).toMatch("content");
      },
      { timeout: 2000 }
    );
  });
});
