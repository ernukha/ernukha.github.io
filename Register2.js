function validform() {
    var a = document.forms["my-form"]["full-name"].value;
    var b = document.forms["my-form"]["email-address"].value;
    var c = document.forms["my-form"]["username"].value;
    var d = document.forms["my-form"]["phone-number"].value;
    if (a==null || a=="")
    {
        alert("Please Enter Your Full Name");
        return false;
    }
    if (b==null || b=="")
    {
        alert("Please Enter Your Email Address");
        return false;
    }
    else if(b!=null)
    {
        var ans=false;
        for(var i=0;i<b.length;i++)
        {
            if(b[i]=='@')
                ans=true;
        }
        if(ans==false)
        {
            alert("Enter valid email address!");
            return ans;
        }
    }
    if (c == null || c == "")
    {
        alert("Please Enter Your Username");
        return  false;
    }
    if (d==null || d=="")
    {
        alert("Please Enter Your NID Number");
        return false;
    }
 }