import "reflect-metadata";

/**
 * [v] Should instance OutDatedEventsFinder with TechEventRepository
 * [v] Should call OutDatedEventsFinder.findOutDatedEvents with page 1
 * [v] Should return OutDatedEventsFinder.findOutDatedEvents result type: { events: TechEvent[], pages: number }
 * [v] Should throw error if OutDatedEventsFinder.findOutDatedEvents is called with page < 1
 * [v] Should return same events than repository
 * [] Should return end date previous than today
 *
 */

import { instance, mock, when } from "ts-mockito";
import { OutDatedEventsFinder } from "../../../../src/features/Events/application/OutDatedEventsFinder";
import { TechEventRepository } from "../../../../src/features/Events/domain/interfaces/TechEventRepository.interface";
import { NegativePageNumberException } from "../../../../src/features/Shared/domain/exception/NegativePageNumber.exception";
import { DomainDate } from "../../../../src/features/Shared/domain/valueObjects/DomainDate";
import { TechEventMother } from "../../../helpers/TechEventMother";

const events = TechEventMother.outdatedEventCollection(3);

describe("outdated events finder", () => {
  let techEventRepository: TechEventRepository;

  beforeAll(() => {
    const { TechEventRepository } = TestBed();
    techEventRepository = TechEventRepository;
  });

  const buildOutdatedEventsFinder = () =>
    new OutDatedEventsFinder(techEventRepository);

  it("Should return events paginated", async () => {
    const outdatedEventsFinder = buildOutdatedEventsFinder();
    const result = await outdatedEventsFinder.findOutDatedEvents({ page: 1 });

    expect(result.events).toBeInstanceOf(Array);
    expect(result.pages).not.toBeNaN();
  });

  it("Should throw error if page is less than 1", async () => {
    const outdatedEventsFinder = buildOutdatedEventsFinder();
    try {
      await outdatedEventsFinder.findOutDatedEvents({ page: 0 });
    } catch (error) {
      expect(error).toBeInstanceOf(NegativePageNumberException);
    }
  });

  it("Should return same events than repository", async () => {
    const outdatedEventsFinder = buildOutdatedEventsFinder();
    const result = await outdatedEventsFinder.findOutDatedEvents({ page: 1 });

    expect(result.events).toEqual(events);
  });

  it("Should return end date previous than today", async () => {
    const outdatedEventsFinder = buildOutdatedEventsFinder();
    const { events } = await outdatedEventsFinder.findOutDatedEvents({
      page: 1,
    });

    events.forEach((event) => {
      const today = DomainDate.today();
      const isBeforeToday = event.getEndDate().isBefore(today);

      expect(isBeforeToday).toBeTruthy();
    });
  });
});

const TestBed = () => {
  const mockerTechEventRepository = mock<TechEventRepository>();
  when(mockerTechEventRepository.findOutDatedEvents(1)).thenResolve({
    events,
    pages: 1,
  });

  const TechEventRepository = instance(mockerTechEventRepository);

  return {
    TechEventRepository,
  };
};
