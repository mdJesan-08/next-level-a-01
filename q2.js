function getDayType(day)
{
    let result;
    convertedDay = day.toLowerCase() 
    if( convertedDay == "friday" | convertedDay  == "saturday" )
    {
        result = "Weekend";
    }
    else
    {
        if( convertedDay == "sunday" | convertedDay == "monday" | convertedDay == "tuesday" |convertedDay == "wednesday")
        {
           result = "Working Day";
        }
        else result = "Invalid Day";

    }

    return result;
}


console.log(getDayType("hjfhdjs"));

console.log(getDayType("MONDAY"));

console.log(getDayType("friday"));