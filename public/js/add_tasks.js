$(document).ready(function() {
    $("#backBtn").click(function() {
        window.open("/tasks");
    })

    $("#taskForm").submit(function(e) {
        e.preventDefault();
        let title = $("#title").val();
        let discription = $("#discrip").val();
        let userId = $("#userId").val();
        let status = $("#status").val();
        console.log(title, discription, userId, status);
    })
})