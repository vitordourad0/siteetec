document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = form.elements["username"].value;
    const password = form.elements["password"].value;
    
    // Verificar se as credenciais estão corretas
    if (username === "vitordourado" && password === "123") {
      // Credenciais corretas, redirecionar para a página principal
      window.location.href = "home.html";
    } else {
      // Credenciais incorretas, exibir mensagem de erro
      alert("Usuário ou senha incorretos. Por favor, tente novamente.");
      // Limpar campos de entrada
      form.reset();
    }
  });
});



