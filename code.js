document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    console.log(username)
    var password = document.getElementById("password").value;
    console.log(password)

    if(username == "agustina" && password == "123"){
        var url ="alumno.html?usuario=" + username;
        window.location.href = url;
    }else if(username == "rodrigo" && password =="123"){
        var url ="docente.html?usuario=" + username;
        window.location.href = url;
    }else{
        alert("Usuario incorrecto")
    }
});