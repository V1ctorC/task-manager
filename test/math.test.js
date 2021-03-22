const { calculateTip } = require('../src/math')

test('Should calcultate total with tip', () => {
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

test('Should calculate with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})