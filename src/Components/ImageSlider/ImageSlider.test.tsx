import { render, screen } from "@testing-library/react";
import ImageSlider from "./ImageSlider";

describe("<ImageSlider /> Component", () => {
  const MockImagesData = [
    {
      url: "Image_url1",
      alt: "Alt_text1",
      text: "Sample_text1",
    },
    {
      url: "Image_url2",
      alt: "Alt_text2",
      text: "Sample_text2",
    },
  ];

  it("should render images with provided data", () => {
    render(<ImageSlider photosUrls={MockImagesData} />);

    const img = screen.getAllByAltText(/Alt_text/i);

    if (img.length !== MockImagesData.length) {
      throw new Error(
        "The number of fitting images does not exact to the number of elements in the mock array"
      );
    }
  });

  it("should render paragraphs with provided data", () => {
    render(<ImageSlider photosUrls={MockImagesData} />);

    const paragraph = screen.getAllByText(/Sample_text/i);

    if (paragraph.length !== MockImagesData.length) {
      throw new Error(
        "The number of fitting paragraphs does not exact to the number of elements in the mock array"
      );
    }
  });
});
