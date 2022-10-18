import { TechEventDto } from "../../src/features/Events/domain/dtos/TechEvent.dto";
import { TechEvent } from "../../src/features/Events/domain/TechEvent.model";

export class TechEventMother {
  public static create(props: Partial<TechEventDto> = {}): TechEvent {
    const defaultProps: TechEventDto = {};

    return new TechEvent();
  }

  public static collection(
    len = 3,
    props: Partial<TechEventDto> = {}
  ): TechEvent[] {
    return Array.from({ length: len }, () => this.create(props));
  }
}
