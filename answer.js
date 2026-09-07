// q1
function describeValue(val)
{
    let result = typeof(val);
    result += " | "
    if(val)
    {
        result += "truthy";
    }
    else
    {
       result += "falsy"; 
    }
    return result;

}

// q2
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



// q3
function validateUsername(user)
{
    let result;
    if(user.lenght < 4)
    {
        result = "Too Short";
    }
    else
    {
        if(user.includes(" "))
        {
            result = "No Space Allowed";
        }
        else
        {
            let convertedUser = user.toLowerCase();
            if(convertedUser.includes("admin"))
            {
                result = "Reserved Word";
            }
            else
            {
                result = "Available" ;
            }
        }
    }


    return result;

}

// q4

function getCngFare(distance, isNight = false, waitTime = 0)
{
    let fare = 0;
    if(distance > 2)
    {
        fare = 50 + (distance - 2) * 15;
    }
    else fare = 50;

    fare = fare + (2*waitTime);

    if(isNight)
    {
        fare = fare + fare*.20;
    }
    return fare;
}

// q5


const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    if(runsNeeded <= 0)  return "Won";
    else
    {
        if(ballsLeft <= 0) return "Lost";
        else
        {
            let requiredRate = (runsNeeded / ballsLeft) * 6 ;
            let verdict; 
            if(requiredRate <= 6) verdict = "Comfortable";
            else if(requiredRate > 6 && requiredRate <= 12) verdict = "Tough";
            else verdict = "Almost Impossible";
            return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`

        }
    }
};
