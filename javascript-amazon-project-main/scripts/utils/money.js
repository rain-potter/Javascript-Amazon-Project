//takes priceCents and converts it to normal USD currency format
export function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
}

export default formatCurrency;