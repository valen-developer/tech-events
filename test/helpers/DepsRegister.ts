import "reflect-metadata";
import { container } from "tsyringe";
import { TechEventRepository } from "../../src/features/Events/domain/interfaces/TechEventRepository.interface";

export class TestDepsRegister {
  public static registerTechRepository(
    techEventRepository: TechEventRepository
  ): void {
    container.register("TechEventRepository", {
      useValue: techEventRepository,
    });
  }
}
