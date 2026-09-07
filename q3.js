

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


console.log(validateUsername("rahim islam"));

console.log(validateUsername("Admin_Rahim"));
console.log(validateUsername("rahim123"));