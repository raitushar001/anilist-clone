import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import Card from "../Card";

describe("Card", () => {
  it("renders Card component", async () => {
    render(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    );
    screen.debug();
  });
});
