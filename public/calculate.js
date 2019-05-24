var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
              49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
// put all of the lower bounds values in array
var bounds = document.getElementsByClassName("bounds");


function run(){
// put all of the lower bounds values in array
var bounds = document.getElementsByClassName("bounds");
// put all of the histogram values in array
var histogram = document.getElementsByClassName("histogram");

// validate the bounds
for (var i = 0; i<bounds.length - 1; i++)
{
    for (var j = i + 1; j < bounds.length; j++)
    {
        if (Number(bounds[i].value) < Number(bounds[j].value))
        {
            
            window.alert("Please enter valid bounds");
        }
    }
}
for (var i = 0; i<histogram.length; i++)
{
    histogram[i].innerHTML = "";
}
for(var i = 0; i<grades.length; i++)
{
    
    if (grades[i] >= bounds[1].value)
    {
        histogram[0].innerHTML = histogram[0].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[1].value && grades[i] >= bounds[2].value)
    {
        histogram[1].innerHTML = histogram[1].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[2].value && grades[i] >= bounds[3].value)
    {
        histogram[2].innerHTML = histogram[2].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[3].value && grades[i] >= bounds[4].value)
    {
        histogram[3].innerHTML = histogram[3].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[4].value && grades[i] >= bounds[5].value)
    {
        histogram[4].innerHTML = histogram[4].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }    
    else if (grades[i] < bounds[5].value && grades[i] >= bounds[6].value)
    {
        histogram[5].innerHTML = histogram[5].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[6].value && grades[i] >= bounds[7].value)
    {
        histogram[6].innerHTML = histogram[6].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[7].value && grades[i] >= bounds[8].value)
    {
        histogram[7].innerHTML = histogram[7].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[8].value && grades[i] >= bounds[9].value)
    {
        histogram[8].innerHTML = histogram[8].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[9].value && grades[i] >= bounds[10].value)
    {
        histogram[9].innerHTML = histogram[9].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }
    else if (grades[i] < bounds[10].value)
    {
        histogram[10].innerHTML = histogram[10].innerHTML + "<img src = 'http://pixelartmaker.com/art/75e21cff85a4aa6.png' height = 20 width = 20>";
    }   
}
}

