$(document).ready(function() {
    $("#editBtn").click(function() {
        let count = $(":checkbox:checked").length;

        if (count != 1) {
            alert("Please select one checkbox");
            return;
        }
        alert("edited");
    })

    $("#deleteBtn").click(function() {
        let count = $(":checkbox:checked").length;

        if (count == 0) {
            alert("Please select atleast one checkbox");
            return;
        }

        let result = confirm("Are you sure you want to delete");

        if (!result) {
            alert("Not deleted");
            return;
        }
        alert("Deleted");
    })

    $("#addBtn").click(function () {
        location.href = '/tasks/add';
    })


})