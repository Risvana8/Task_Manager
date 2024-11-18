$(document).ready(function() {

    let name = localStorage.getItem("name");
    let password = localStorage.getItem("password");

    $("#username").val(name);
    $("#password").val(password);

    $("#loginForm").submit(function(e) {
        e.preventDefault();
        // window.location.href = "/users";
        // location.href = "/users";
        window.open("/users");
    })

    $("#remember-me").click(function() {
        if($("#remember-me").prop("checked")==true) {
            let name = $("#username").val();
            let password = $("#password").val();

            localStorage.setItem("name", name);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("name");
            localStorage.removeItem("password");
        }
    })
})