export function displayMoney(amount) {
    return (amount / 100).toFixed(2)
}

export function dollarsToCents(amount) {
    return Math.round(amount * 100)
}