export class Calculator {
    add(a: number, b: number): number {
        this.validateNumbers(a, b);
        return a + b;
    }

    private validateNumbers(...numbers: any[]): void {
        if (numbers.some(n => typeof n !== 'number')) {
            throw new Error('Numbers are required');
        }
    }
}
