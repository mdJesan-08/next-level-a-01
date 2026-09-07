// let a = 2;

// console.log(typeof(a));

// if(a)
// {
//     console.log("truthy");
// }

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
console.log(describeValue("hello"));

console.log(describeValue(25));//"string | falsy"
console.log(describeValue(null)	);
console.log(describeValue(undefined));
