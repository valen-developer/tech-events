import { Uuid } from "../../Shared/domain/valueObjects/Uuid.valueObject";
import { TechEventDto } from "./dtos/TechEvent.dto";

export class TechEvent {
  public readonly uuid: Uuid;

  constructor(dto: TechEventDto) {
    this.uuid = new Uuid(dto.uuid);
  }
}
