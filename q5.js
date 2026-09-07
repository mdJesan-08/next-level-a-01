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


console.log(getChaseVerdict(100, 80, 12));

console.log(getChaseVerdict(100, 70, 12));

console.log(getChaseVerdict(200, 200, 12));