import { Exception } from "./Exception.interface";

export class NegativePageNumberException extends Exception {
  constructor() {
    super("NegativePageNumberException", "Page number cannot be negative");
  }
}
