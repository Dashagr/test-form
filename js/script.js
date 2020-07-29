$("#sendMail").on("click", function () {
    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let web = $("#web").val().trim();
    let message = $("#message").val().trim();

    if (name == "" || email == "" || web == "" || message == "") {
        $("#errorMessage").text("Please, fill all fields.");
        return false;
    }

    $("#errorMessage").text("");

    console.log(`Hi, ${name}!`);
});