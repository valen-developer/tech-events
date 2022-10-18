import { inject, injectable } from "tsyringe";
import { Paginated } from "../../../core/types/Paginated.type";
import { PageNumber } from "../../Shared/domain/valueObjects/PageNumber.valueObject";
import { TechEventRepository } from "../domain/interfaces/TechEventRepository.interface";
import { TechEvent } from "../domain/TechEvent.model";

@injectable()
export class NextEventsFinder {
  constructor(
    @inject("TechEventRepository") private eventRepository: TechEventRepository
  ) {}

  public async findNextEvents(props: {
    page: number;
  }): Promise<Paginated<TechEvent[], "events">> {
    const page = new PageNumber(props.page);
    const { events, pages } = await this.eventRepository.findNextEvents(
      page.valueOf()
    );

    return {
      events,
      pages,
    };
  }
}
