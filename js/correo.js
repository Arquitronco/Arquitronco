function sendEmail() {
    var nameInput = $("#name").val();
    var phoneInput = $("#phone").val();
    var emailInput = $("#email").val();
    var commentInput = $("#comment").val();

    $("input").val("");
    $("textarea").val("");
    alert("Gracias por contactarnos, le responderemos lo mas pronto posible.");
    // emailjs.send("default_service","arquitronco",{name:nameInput, phone:phoneInput,email:emailInput,comment:commentInput});
}