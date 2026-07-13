function changeTheme()
{

    document.body.classList.toggle("dark");

    var btn=document.getElementById("themeBtn");

    if(document.body.classList.contains("dark"))
    {
        btn.innerHTML="Light Mode";
    }

    else
    {
        btn.innerHTML="Dark Mode";
    }

}



var hour=new Date().getHours();

var greeting=document.getElementById("greeting");

if(hour<12)
{
    greeting.innerHTML="Good Morning";
}

else if(hour<18)
{
    greeting.innerHTML="Good Afternoon";
}

else
{
    greeting.innerHTML="Good Evening";
}