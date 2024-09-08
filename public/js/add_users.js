$(document).ready(function() {
    $("#backBtn").click(function() {
        window.open("/users");
    })

    $("#userForm").submit(function(e) {
        e.preventDefault();

        if ($("#pwd1").val() != $("#pwd2").val()) {
            alert ("Password & Confirm Password should be same.");
            return;
        }
        window.open("/users");        
    })
})