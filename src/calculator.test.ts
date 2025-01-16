import { Calculator } from './calculator';

describe('Calculator', () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('handles negative numbers', () => {
        expect(calculator.add(-1, -2)).toBe(-3);
    });

    test('validates input types', () => {
        expect(() => calculator.add('1' as any, '2' as any))
            .toThrow('Numbers are required');
    });
});
