/**
 * [v] Should render a TechEvent component
 * [v] Should render a TechEvent component with a techevent as prop
 * [v] Should render the tech event title as h1
 * [v] Should render the tech event description
 * [v] Should render the tech event dates in format dd/mm/yyyy hh:mm · dd/mm/yyyy hh:mm
 * [v] Should render the tech event location
 * [v] Should render the tech event image with an alt text: {title} cover
 */

import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { TechEvent } from "../../../../src/features/Events/domain/TechEvent.model";
import { TechEventView } from "../../../../src/features/Events/presentation/components/TechEvent/TechEvent";
import { TechEventMother } from "../../../helpers/TechEventMother";

describe("TechEvent", () => {
  const renderComponent = async (event: TechEvent) => {
    await act(async () => {
      render(<TechEventView event={event} />);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  };

  it("Should render a TechEvent component with a event as prop", async () => {
    await renderComponent(TechEventMother.create());
  });

  it("Should render the tech event title as h1", async () => {
    const event = TechEventMother.create();

    await renderComponent(event);
    const title = screen.getByRole("heading", { level: 1 });

    expect(title).toHaveTextContent(event.title.value);
  });

  it("Should render the tech event description", async () => {
    const event = TechEventMother.create();

    await renderComponent(event);
    const description = screen.getByText(event.description.value);

    expect(description).toBeInTheDocument();
  });

  it("Should render the tech event dates in format dd/mm/yyyy hh:mm · dd/mm/yyyy hh:mm", async () => {
    const event = TechEventMother.create();

    await renderComponent(event);
    const dates = screen.getByText(event.dates.intervalString());

    expect(dates).toBeInTheDocument();
  });

  it("Should render the tech event location", async () => {
    const event = TechEventMother.create();

    await renderComponent(event);
    const location = screen.getByText(event.location.value);

    expect(location).toBeInTheDocument();
  });

  it("Should render the tech event image with an alt text: {title} cover", async () => {
    const event = TechEventMother.create();

    await renderComponent(event);
    const image = screen.getByAltText(`${event.title.value} cover`);

    expect(image).toBeInTheDocument();
  });
});
