/// <reference types="jest" />
import "reflect-metadata";

/**
 * checking driven development
 *
 * [v] Should instance NextEventsFinder with TechEventRepository
 * [v] Should call NextEventsFinder.findNextEvents with 1
 * [v] Should return NextEventFinder.findNextEvents result type: { events: TechEvent[], pages: number }
 * [v] Should throw error if NextEventsFinder.findNextEvents is called with page < 1
 * [v] Should return same events than repository
 * [ ] Should return start date after than today
 *
 */

import { instance, mock, spy, verify, when } from "ts-mockito";
import { NextEventsFinder } from "../../../../src/features/Events/application/NextEventsFinder";
import { TechEventRepository } from "../../../../src/features/Events/domain/interfaces/TechEventRepository.interface";
import { NegativePageNumberException } from "../../../../src/features/Shared/domain/exception/NegativePageNumber.exception";
import { DomainDate } from "../../../../src/features/Shared/domain/valueObjects/DomainDate";
import { TechEventMother } from "../../../helpers/TechEventMother";

const events = TechEventMother.nextEventCollection(3);

describe("Next event finder", () => {
  let techEventRepository: TechEventRepository;
  beforeAll(() => {
    const { TechEventRepository } = TestBed();
    techEventRepository = TechEventRepository;
  });

  const buildNextEventsFinder = () => {
    return new NextEventsFinder(techEventRepository);
  };

  const findNextEvents = async (page: number) => {
    const nextEventsFinder = buildNextEventsFinder();
    return await nextEventsFinder.findNextEvents({ page });
  };

  it("Should return events paginated", async () => {
    const result = await findNextEvents(1);

    expect(result.events).toBeInstanceOf(Array);
    expect(result.pages).not.toBeNaN();
  });

  it("Should throw error if page is less than 1", async () => {
    try {
      await findNextEvents(0);
    } catch (error) {
      expect(error).toBeInstanceOf(NegativePageNumberException);
    }
  });

  it("Should call to TechEventsRepository.findNextEvents(page)", async () => {
    const repository = spy(techEventRepository);
    const page = 1;
    await findNextEvents(page);
    verify(repository.findNextEvents(page)).once();
  });

  it("Should return same events than repository", async () => {
    const result = await findNextEvents(1);
    expect(result.events).toEqual(events);
  });

  it("Should return start date after than today", async () => {
    const { events } = await findNextEvents(1);
    const today = DomainDate.today();

    events.forEach((event) => {
      const isAfterToday = event.getInitDate().isAfter(today);
      expect(isAfterToday).toBeTruthy();
    });
  });
});

const TestBed = () => {
  const mockerTechEventRepository = mock<TechEventRepository>();
  when(mockerTechEventRepository.findNextEvents(1)).thenResolve({
    events,
    pages: 1,
  });

  return {
    TechEventRepository: instance(mockerTechEventRepository),
  };
};
