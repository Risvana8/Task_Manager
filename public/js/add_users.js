$(document).ready(function() {
    $("#backBtn").click(function() {
        window.open("/users");
    })

    $("#userForm").submit(function(e) {
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let pwd1 = $("#pwd1").val();
        console.log(name, email, pwd1);

        if ($("#pwd1").val() != $("#pwd2").val()) {
            alert ("Password & Confirm Password should be same.");
            return;
        }

        $.ajax({
            url: "/api/users",
            type: "POST",
            data: {
                name: name,
                email: email,
                password: pwd1
            },
            success: function(response) {
                alert(response);
            },
            error: function(error) {
               alert(error);
            }
            
        })
        // window.open("/users");   //It will open in new tab.
        location.href = '/users';     
    })


})