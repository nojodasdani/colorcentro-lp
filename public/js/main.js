$("#form-contacto").on('submit', function(evt) {
    evt.preventDefault();
    
    let nombre = $('#nombre').val();
    let email = $('#email').val();
    let compania = $('#compania').val();
    let mensaje = $('#mensaje').val();
    let data =  {
        nombre: nombre,
        email: email,
        compania: compania,
        mensaje: mensaje
    };
    $.ajax({
        type: "POST",
        url: './api/mensaje',
        data: data,
        success: function(data, status) {
            showModal("Se ha enviado tu mensaje.");
        },
        error: function(err) {
            showModal("Hubo un error enviando tu mensaje, inténtalo más tarde.");
        }
    });
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    clearForm();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        clearForm();
    }
}

let showModal = message => {
    let text = document.getElementById("modal-message");

    text.innerHTML = message;
    modal.style.display = "block";
}

let clearForm = () => {
    document.getElementById("form-contacto").reset();
}