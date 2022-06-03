import { render, screen, fireEvent } from "@testing-library/react";
import ProductDescription from "../Product-description";
import "@testing-library/jest-dom/extend-expect";

const mockData = [
  {
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
];
test("render Product description and test prod classes", async () => {
  render(<ProductDescription products={mockData} />);
  const getElementByClassName = await screen.findByTestId("card");
  const getElementByClassNameProdContent = await screen.findByTestId(
    "card-content"
  );
  expect(getElementByClassName).toHaveClass("prod-card");
  expect(getElementByClassNameProdContent).toHaveClass("prod-content");
});

test("Check for description and image after title click", async () => {
  render(<ProductDescription products={mockData} />);
  const getTitle = await screen.findByTestId("card-title");
  fireEvent.click(getTitle);
  const getImage = await screen.findByRole("img");
  const getDescription = await screen.findByTestId("prod-full-description");
  expect(getImage).toHaveClass("prod-image");
  expect(getDescription).toHaveClass("prod-details-description");
});
