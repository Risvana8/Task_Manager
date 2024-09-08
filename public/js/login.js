$(document).ready(function() {
    $("#loginForm").submit(function(e) {
        e.preventDefault();
        // window.location.href = "/users";
        // location.href = "/users";
        window.open("/users");
    })
})