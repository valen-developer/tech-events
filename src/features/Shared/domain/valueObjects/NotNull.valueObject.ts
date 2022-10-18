import {ValueObject} from "./valueObject";


export abstract class NotNullValueObject<T> extends ValueObject<T> {
    constructor(value: T) {
        super(value);
        this.checkValue(value);

    }

    private checkValue(value: T): void {
        if (value === null || value === undefined) {
            throw new Error("Value can't be null or undefined");
        }
    }
}