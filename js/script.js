


var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");

var email = document.getElementById("email");
var password = document.getElementById("pass");


var users;
if(localStorage.getItem("users") == null)
{
    users = [];
}
else
{
    users = JSON.parse(localStorage.getItem("users"));
}


function signUp() {

    var user = {
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
        isLogged:false,
    };
    if(checkEmptyInputs() != true && checkEmailExistance(user.email) != true)
    {
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        alert("Registered Success..");
        clearForm();
    }
    else
    {
        if(checkEmptyInputs())
            document.getElementById("error-msg").innerHTML = "All inputs are required";
        else
            document.getElementById("error-msg").innerHTML = "This email is already exist";
    }
}

function checkEmailExistance(email) {
  for(var i = 0 ; i<users.length ; i++)
  {
     if(users[i].email == email)
       { 
           return true;
        }
       else
       {
           return false;
       }
  }
}


function checkEmptyInputs() {
    if(nameInput.value ==""&&emailInput.value==""&&passwordInput.value=="")
    {
        return true;
    }
    else
    {
        return false;
    }
}
function clearForm() {
    nameInput.value ="";
    emailInput.value ="";
    passwordInput.value ="";
    document.getElementById("error-msg").innerHTML = "";
}

function login() {
    var loggedUser = {
        email:email.value,
        password:password.value
    };
    console.log(loggedUser);
    if(checkEmailAndPassword(loggedUser)!=true)
    {
        document.getElementById("error-msg").innerHTML = "username or password is invalid";
    }
    else
    {
        alert("logged in...");
        window.location.href ='home.html';
    }
}

function checkEmailAndPassword(loggedUser) {
    var users = JSON.parse(localStorage.getItem("users"));
    console.log(users);
    for(var i = 0;i<users.length;i++)
    {
        if(users[i].email==loggedUser.email && users[i].password==loggedUser.password)
        {
            users[i].isLogged = true;
            var x = "";
            x += users[i].name;
            console.log(x);
            //document.getElementById("hello").innerHTML = x;
            return true;
        }
    }
    return false;
}

function logOut() {
    window.location.href ='index.html';
}

//console.log(users);
//var x = document.getElementById("name").innerHTML = `Welcome amir`;
//console.log(x);
