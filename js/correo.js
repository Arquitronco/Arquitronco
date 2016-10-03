function sendEmail() {
    var nameInput = $("#name").val();
    var phoneInput = $("#phone").val();
    var emailInput = $("#email").val();
    var commentInput = $("#comment").val();
    if (emailInput != "") {
        console.log(emailInput)
        console.log(isValidEmailAddress(emailInput));
        if (!isValidEmailAddress(emailInput)) {
            emailInput = "";
        }
    }
    if (nameInput !== "" && commentInput !== "" && (emailInput !== "" || phoneInput !== "")) {


        emailjs.send("default_service", "arquitronco", { name: nameInput, phone: phoneInput, email: emailInput, comment: commentInput })
            .then(function (response) {
                $("input").val("");
                $("textarea").val("");
                if ($("input").hasClass("invalid-border")) {
                    $("input").removeClass("invalid-border");
                }

                if ($("#comment").hasClass("invalid-border")) {
                    $("#comment").removeClass("invalid-border");
                }
                alert("Gracias por contactarnos, le responderemos lo mas pronto posible.");
                emailjs.send("default_service", "arquitronco2", { name: nameInput, phone: phoneInput, email: emailInput, comment: commentInput });

            }, function (err) {
                alert("Ha ocurrido un problema, intente mas tarde");
            });


    } else {
        if (nameInput == "") {
            $("#name").addClass("invalid-border");
        }
        if (phoneInput == "" && emailInput == "") {
            $("#phone").addClass("invalid-border");
            $("#email").addClass("invalid-border");

        }
        if (commentInput == "") {
            $("textarea").addClass("invalid-border");
        }
        alert("Ingrese por lo menos su nombre, correo electrónico válido o teléfono, y un comentario");
    }
}
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};