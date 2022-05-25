// Header
let numberO= document.querySelectorAll(".nav-link").length

for(let i=0;i<numberO;i++)
{
    document.querySelectorAll(".nav-link")[i].addEventListener("click", function(){
        let lnk;
        ({innerHTML: lnk} = this);
        switch (lnk)
        {
            case "Home":
                document.location.href= "index.html";
                break;
            case "Universities":
                document.location.href= "Universities.html";
                break;
            case "Test":
                document.location.href= "Test.html";
                break;
            case "Community":
                document.location.href= "Community.html";
                break;
            case "Register":
                document.location.href= "Register2.html";
                break;
        }

    });

}
// End of Header
