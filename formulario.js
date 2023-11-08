document.addEventListener("DOMContentLoaded", function () {
    const formularioContato = document.getElementById("formulario-contato");

    formularioContato.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Aqui você pode adicionar código para enviar os dados do formulário para um servidor ou realizar outra ação desejada.

        alert("Mensagem enviada com sucesso!");
        formularioContato.reset();
    });
});
