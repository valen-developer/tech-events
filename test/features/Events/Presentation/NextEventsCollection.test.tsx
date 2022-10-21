import "reflect-metadata";

import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { instance, mock, when } from "ts-mockito";
import { TechEventDto } from "../../../../src/features/Events/domain/dtos/TechEvent.dto";
import { TechEventRepository } from "../../../../src/features/Events/domain/interfaces/TechEventRepository.interface";
import { TechEvent } from "../../../../src/features/Events/domain/TechEvent.model";
import { NextEventsCollection } from "../../../../src/features/Events/presentation/components/NextEventsCollection/NextEventsCollection";
import { TestDepsRegister } from "../../../helpers/DepsRegister";
import { TechEventMother } from "../../../helpers/TechEventMother";
import { DomainDate } from "../../../../src/features/Shared/domain/valueObjects/DomainDate";

/**
 * [v] Should render a NextEventsCollection component
 * [v] Should have a title for each event
 * [v] Should have a sort description for each event
 * [v] Should have a init date for each event in format dd/mm/yyyy and after today
 * [v] Should have a location for each event
 *
 */

const events = TechEventMother.nextEventCollection(3);

describe("NextEventsCollection", () => {
  const renderNextEventCollection = async () => {
    await act(async () => {
      render(<NextEventsCollection />);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  };

  const assertEventPropertieInDocument = (
    event: TechEvent,
    propertie: keyof Omit<TechEventDto, "date">
  ) => {
    const propertieValue = event[propertie].value;
    expect(screen.getByText(propertieValue)).toBeInTheDocument();
  };

  const assertEventsCollectionPropertyInDocument = (
    events: TechEvent[],
    property: keyof Omit<TechEventDto, "date">
  ) => {
    events.forEach((event) => {
      assertEventPropertieInDocument(event, property);
    });
  };

  beforeAll(() => {
    const { TechEventRepository } = TestBed();
    TestDepsRegister.registerTechRepository(TechEventRepository);
  });

  it("Should have a title for each event", async () => {
    await renderNextEventCollection();
    assertEventsCollectionPropertyInDocument(events, "title");
  });

  it("Should have a sort description for each event", async () => {
    await renderNextEventCollection();
    assertEventsCollectionPropertyInDocument(events, "shortDescription");
  });

  it("Should have a init date for each event and after today", async () => {
    await renderNextEventCollection();

    events.forEach((event, i) => {
      const initDateAsText = event.getInitDate().toDDMMYYYY();
      const textInScreen = screen.getAllByText(initDateAsText);
      const actualText = textInScreen[i];

      expect(actualText).toBeInTheDocument();

      console.log(initDateAsText);

      const initDate = new DomainDate(event.getInitDate().value);

      console.log(initDate.toDDMMYYYY());

      const today = DomainDate.today();

      expect(initDate.isAfter(today)).toBeTruthy();
    });

    screen.debug();
  });

  it("Should have a location for each event", async () => {
    await renderNextEventCollection();
    assertEventsCollectionPropertyInDocument(events, "location");
  });
});

const TestBed = () => {
  const mockedEventsRepository = mock<TechEventRepository>();
  when(mockedEventsRepository.findNextEvents(1)).thenResolve({
    events: events,
    pages: 1,
  });

  return {
    TechEventRepository: instance(mockedEventsRepository),
  };
};
