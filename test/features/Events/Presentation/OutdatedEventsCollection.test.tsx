import "reflect-metadata";

/**
 * [v] Should render OutdatedEventsCollection
 * [v] Should see the title for each event
 * [v] Should see the short description for each event
 * [v] Should see the init date for each event in format DD/MM/YYYY
 * [v] Should see the location for each event
 *
 *
 */

import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { instance, mock, when } from "ts-mockito";
import { TechEventRepository } from "../../../../src/features/Events/domain/interfaces/TechEventRepository.interface";
import { OutdatedEventsCollection } from "../../../../src/features/Events/presentation/components/OutdatedEventsCollection/OutdatedEventsCollection";
import { TestDepsRegister } from "../../../helpers/DepsRegister";
import { TechEventMother } from "../../../helpers/TechEventMother";

const events = TechEventMother.collection(3);

describe("OutdatedEventsCollection", () => {
  const renderOutdatedEventsCollection = async () => {
    await act(async () => {
      render(<OutdatedEventsCollection />);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  };

  beforeAll(() => {
    const { TechEventRepository } = TestBed();
    TestDepsRegister.registerTechRepository(TechEventRepository);
  });

  it("Should see the title for each event", async () => {
    await renderOutdatedEventsCollection();

    events.forEach((event) => {
      expect(screen.getByText(event.title.value)).toBeInTheDocument();
    });
  });

  it("Should see the short description for each event", async () => {
    await renderOutdatedEventsCollection();

    events.forEach((event) => {
      expect(
        screen.getByText(event.shortDescription.value)
      ).toBeInTheDocument();
    });
  });

  it("Should see the init date for each event in format DD/MM/YYYY", async () => {
    await renderOutdatedEventsCollection();

    events.forEach((event) => {
      expect(
        screen.getByText(event.getInitDate().toDDMMYYYY())
      ).toBeInTheDocument();
    });
  });

  it("Should see the location for each event", async () => {
    await renderOutdatedEventsCollection();

    events.forEach((event) => {
      expect(screen.getByText(event.location.value)).toBeInTheDocument();
    });
  });
});

const TestBed = () => {
  const mockedEventsRepository = mock<TechEventRepository>();
  when(mockedEventsRepository.findOutDatedEvents(1)).thenResolve({
    events: events,
    pages: 1,
  });

  return {
    TechEventRepository: instance(mockedEventsRepository),
  };
};
