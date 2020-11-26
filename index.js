const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
  const fareMultiplier = (fare) => {
    return fare * multiplier
  }
  return fareMultiplier
}

const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, func) => {
  return func(drivers)
}