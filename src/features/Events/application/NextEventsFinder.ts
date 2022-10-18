import { TechEventRepository } from "../domain/interfaces/TechEventRepository.interface";
import { TechEvent } from "../domain/TechEvent.model";

export class NextEventsFinder {
  constructor(private eventRepository: TechEventRepository) {}

  public async findNextEvents(props: {
    page: number;
  }): Promise<{ events: TechEvent[]; pages: number }> {
    if (props.page < 0) {
      throw new Error("Page number must be positive");
    }

    const events = await this.eventRepository.findNextEvents(props.page);

    return {
      events,
      pages: 1,
    };
  }
}
