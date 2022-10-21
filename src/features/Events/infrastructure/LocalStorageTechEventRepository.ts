import { mockedEvents } from "../../../../__mocks/constants/events";
import { Paginated } from "../../../core/types/Paginated.type";
import { DomainDate } from "../../Shared/domain/valueObjects/DomainDate";
import { TechEventRepository } from "../domain/interfaces/TechEventRepository.interface";
import { TechEvent } from "../domain/TechEvent.model";

export class LocalStorageTechEventRepository implements TechEventRepository {
  private readonly COUNT_FOR_PAGE = 10;

  private events: TechEvent[] = [...mockedEvents];

  constructor() {}

  public async findNextEvents(
    page: number
  ): Promise<Paginated<TechEvent[], "events">> {
    const filtered = [...this.events].filter((e) =>
      e.dates.endDate().isAfter(DomainDate.today())
    );

    const pages = filtered.length / this.COUNT_FOR_PAGE;
    const sliced = filtered.slice(
      (page - 1) * this.COUNT_FOR_PAGE,
      page * this.COUNT_FOR_PAGE
    );

    return {
      events: sliced,
      pages,
    };
  }

  public async findOutDatedEvents(
    page: number
  ): Promise<Paginated<TechEvent[], "events">> {
    const filtered = [...this.events].filter((e) =>
      e.dates.endDate().isBefore(DomainDate.today())
    );

    const pages = filtered.length / this.COUNT_FOR_PAGE;
    const sliced = filtered.slice(
      (page - 1) * this.COUNT_FOR_PAGE,
      page * this.COUNT_FOR_PAGE
    );

    return {
      events: sliced,
      pages,
    };
  }

  public findEventByUuid(uuid: string): Promise<TechEvent> {
    throw new Error("Method not implemented.");
  }
}
