function cputemp2()
{
    $.ajax(
    {
        type: "POST",
        url: "#place python script here",
        dataType: "html",
        success: function(msg)
        {
        console.log(msg); # It's just returning the HTML of test.html currently
        document.getElementById('swiss').innerHTML = msg;
        },
    });
}    