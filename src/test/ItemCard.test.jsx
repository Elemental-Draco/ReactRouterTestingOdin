import { render, screen, waitFor } from "@testing-library/react";
import ItemCard from "../components/ItemCard";
import { describe, expect, it } from "vitest";

describe("shopping", () => {
  it("renders a shopping component that shows a loading screen, then shows the items", async () => {
    render(
      <ItemCard
        itemName={"this gold jewelery"}
        price={500}
        imgUrl={"exampleimg.png"}
      />
    );

    expect(screen.getByText(/this gold jewelery/i)).toBeDefined();

    expect(screen.getByText(/500/i)).toBeDefined();
    expect(screen.getByRole("img")).toBeDefined();
  });
});
