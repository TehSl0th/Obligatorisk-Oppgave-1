function isDateValid(dato) {
    return (isLenghtValid(dato) &&
            isPeriodValid(dato) && 
            isYearValid(dato) &&
            isMonthValid(dato) &&
            isDayValid(dato));
}

function isLenghtValid(dato) {
    return (dato.length == 10);
}

function isPeriodValid(dato) {
    return (dato.charAt(2) === "." && dato.charAt(5) === ".")
}

function isYearValid(dato) {
    let year = dato.slice(6,10);
    console.log(year+' dette er year');
    return (year.length === 4 && year >= '0000' && year <= '9999')
}

function isMonthValid(dato) {
    let month = dato.slice(3,5);
    console.log(month+' dette er month');
    return (month.length === 2 && month >= '01' && month <= '12')
}

function isDayValid(dato) {
    let day = dato.slice(0,2);
    let month = dato.slice(3,5);
    let year = dato.slice(6,10);
    console.log(day,month,year)

    if (day >= '01' && day <= '28') {
        return true;
    }

    if ((day >= '01' && day <= '29') && month =='02' && isLeapYear(year))  {
        return true;
    }

    if ((month !='02' && day == '30') || (month != '02' && month != '04' && month != '06' && month != '09' && month != '11') && day == '31') {
        return true;
    }

    return false;
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
//return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
//year = dato.splice(0,4)