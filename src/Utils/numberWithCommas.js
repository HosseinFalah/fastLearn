// Change Format Price

export const numberWithCommas = (price) => price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')