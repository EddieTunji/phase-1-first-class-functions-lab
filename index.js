const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(drivers));
console.log(returnFirstTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    };
}

function fareDoubler (value) {
    return value + value;
}

function fareTripler (value) {
    return value * 3;
}

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };
