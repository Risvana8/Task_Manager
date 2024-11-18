$(document).ready(function() {
    $("#addBtn").click(function() {
        location.href = '/users/add';
    })

    $("#editBtn").click(function() {
        let count = $(":checkbox:checked").length;

        if(count != 1) {
            alert("Please select one checkbox.");
            return;
        } 
        alert("Edited");
    })

    $("#deleteBtn").click(function() {
        let count = $(":checkbox:checked").length;

        if(count == 0) {
            alert("Please select atleast one checkbox.");
            return;
        }

        let result = confirm("Are you sure you want to delete");
        console.log(result);
        if (!result) {
            alert("Not Deleted");
            return;
        }
        alert("Deleted");
    })
})