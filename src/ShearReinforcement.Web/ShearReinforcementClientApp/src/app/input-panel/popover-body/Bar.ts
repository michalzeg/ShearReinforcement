

export class Bar {
    constructor(public barsCount: number, public diameter: number) { }
    public get area(): number {
        const value = Math.round(Math.PI * this.diameter * this.diameter / 4 * this.barsCount);
        return value;
    }

    public isValid() {
        return this.barsCount > 0 && this.diameter > 0 && Number.isInteger(this.barsCount) && Number.isInteger(this.diameter);
    }
}
