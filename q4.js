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


console.log(getCngFare(5, false, 10));


console.log(getCngFare(1));