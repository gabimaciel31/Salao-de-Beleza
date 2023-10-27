const form = document.querySelector("form");
const nomeinput = document.querySelector("nome");
const emailInput = document.querySelector("email");
const SenhaInput = document.querySelector("senha");
const CelularInput = document.querySelector("celular");
const DataInput = document.querySelector("data");
const HoraInput = document.querySelector("name");
const GêneroInput = document.querySelector("gênero");
const jobSelect = document.querySelector("job");
const MensagemTextArea = document.querySelector("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

  // Verifica se o nome está vazio
    if(nomeinput.value === "" || !isEmailValid(emailInput.value) ){
        alert("Por favor, preencha o seu nome")
        return;
    }
    
 // Verifica se o e-mail está preenchido e se é válido
    if(emailInput.value === "") {
        alert("Por favor, preencha o seu e-mail");
        return;
    }

 // Verificar se a senha está preenchida
   if (!ValidatePassword(PasswordInput.value, 8)) {
    alert("A Senha precisa ser no mínimo 8 digitos.")
    return;
   }

 // Verficar se a mensagem está preenchida
   if(MensagemTextArea.value === ""){
    alert("Por favor, escreva uma mensagem")
   }

 // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

//Função que valida e-mail
function isEmailValid(email) {

 // Cria uma redex para validar e-mail
  const emailRedex = new RedexExp(
    //nomedousuario@gamil.com
    /^[a-zA-z0-9._-]@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
  );
 
   if(emailRedex.text(email)) {
    return true;
   }

   return false;
}

 // Função que valida a senha
  function ValidatePassword(password, minDigits) {
  if(password.length >= minDigits) {
    //Senha Válida
    return true
  }

  // Senha inválida
  return false
 }