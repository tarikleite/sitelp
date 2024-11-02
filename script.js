document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Verifica se todos os campos estão preenchidos
    if (name && email && message) {
        alert(`Obrigado, ${name}! Entraremos em contato em breve.`);
        this.reset(); // Reseta o formulário
    } else {
        alert('Por favor, preencha todos os campos.'); // Mensagem de erro
    }
}
);

