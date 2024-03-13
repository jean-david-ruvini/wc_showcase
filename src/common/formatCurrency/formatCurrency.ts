export const formatCurrency = (number: number) => {
    // Round the number to an integer
    const roundedNumber = Math.round(number);
    // Add commas to the integer part
    const integerWithCommas = roundedNumber
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // Create the formatted currency string
    const formattedCurrency = `$${integerWithCommas}`;
    return formattedCurrency;
};