1-let usuario, senha;
usuario = prompt(&quot;usuario: &quot;);
senha = prompt(&quot;Senha: &quot;);

while (usuario !== &quot;evellyn&quot; || senha != 080409) {
console.log(&quot;Dados Incorretos&quot;);
usuario = prompt(&quot;usuario: &quot;);
senha = prompt(&quot;Senha: &quot;);
}
console.log(&quot;Bem-Vindo!&quot;);

2-let senha
senha = prompt(&quot;senha:&quot;)
while(senha!==&quot;1234&quot;){
console.log(&quot;Dados incorretos&quot;)
senha = prompt(&quot;Senha:&quot;)
}
console.log(&quot;Bem-vindo!&quot;)

3-let senha
senha = prompt(&quot;insira sua senha: &quot;)
while (senha |= 1234){
console. log(&quot;Confirme sua senha!&quot;)
senha = prompt( &quot;senha: &quot;)
console.log (&quot;Bem-Vindo! &quot;)

4-let usuario
let senha
usuario = prompt( &quot;Digite seu usuario: &quot;)

senha = prompt (&quot;Digite sua senha: &quot;)
while (usuario !== &quot;evellyn&quot; || senha != &quot;080409&quot; ){
console.log (&quot;Confirme seu usuario e sua senha!&quot;)
usuario = prompt( &quot;Digite seu usuario: &quot;)
senha = prompt( &quot;Digite sua senha: &quot;)
senha: &quot;)
}
console. log(&quot;&#39;Seja Bem-Vindo!&quot;)

5-let usuario
let senha
usuario = prompt(&quot;digite seu usuario: &quot;)
senha = prompt(&quot;digite sua senha: &quot;)
while (usuario !== &quot;admin&quot; || senha != &quot;1234&quot;){
console.log( &quot;usuario ou senha incorretos&quot;)
usuario = prompt(&quot;digite seu usuario: &quot;)
senha = prompt(&quot;digite sua senha: &quot;)
}
console.log(&quot;Bem-Vindo&quot;)

6-let usuario, senha
usuario = prompt(&quot;Usuário: &quot;)
senha = prompt(&quot;Senha: &quot;)
chance = 2
if (usuario !== &quot;evellyn&quot; || senha !== &quot;080409&quot;){
while(chance != 0 ){
console.log(&quot;Dados errados!&quot;)
console.log(&quot;Tente novamente! Você tem&quot;, chance,&quot;chances.&quot;)
usuario = prompt(&quot;Usuário: &quot;)
senha = prompt(&quot;Senha: &quot;)
chance--

}
console.log(&quot;Acesso bloqueado.&quot;)
} else {
console.log(&quot;Bem vindo(a)!&quot;)
}

7-let nomeCadastrado = prompt(&quot;Cadastre seu nome:&quot;);
let senhaCadastrada = prompt(&quot;Cadastre sua senha:&quot;);

let loginNome = prompt(&quot;Digite seu nome para fazer login:&quot;);
let loginSenha = prompt(&quot;Digite sua senha para fazer login:&quot;);

while (loginNome !== nomeCadastrado || loginSenha !== senhaCadastrada) {
console.log(&quot;Login ou senha inválidos! Tente novamente.&quot;);

loginNome = prompt(&quot;Digite seu nome para fazer login:&quot;);
loginSenha = prompt(&quot;Digite sua senha para fazer login:&quot;);
}

console.log(&quot;Login realizado com sucesso! Bem-vindo(a), &quot; + loginNome + &quot;!&quot;);

8-let nomeCadastrado = prompt(&quot;Cadastre seu nome:&quot;);
let senhaCadastrada = prompt(&quot;Cadastre sua senha:&quot;);

let loginNome;
let loginSenha;

while (true) {
loginNome = prompt(&quot;Digite seu nome para login:&quot;);
loginSenha = prompt(&quot;Digite sua senha:&quot;);

if (loginNome === nomeCadastrado &amp;&amp; loginSenha === senhaCadastrada) {
console.log(&quot;Login realizado com sucesso! Bem-vindo(a), &quot; + loginNome + &quot;!&quot;);
break;
} else {
console.log(&quot;Nome ou senha incorretos!&quot;);

let esqueceuSenha = prompt(&quot;Esqueceu a senha? (sim/não)&quot;);

if (esqueceuSenha.toLowerCase() === &quot;sim&quot;) {
console.log(&quot;Sua senha cadastrada é: &quot; + senhaCadastrada);
break
}
}
}

9-let usuarioCadastrado = prompt(&quot;Cadastre seu nome de usuário:&quot;);
let senhaCadastrada = prompt(&quot;Cadastre sua senha:&quot;);

let loginUsuario;
let loginSenha;

while (true) {
loginUsuario = prompt(&quot;Digite seu nome de usuário:&quot;);
loginSenha = prompt(&quot;Digite sua senha:&quot;);

if (loginUsuario === usuarioCadastrado &amp;&amp; loginSenha === senhaCadastrada) {
console.log(&quot;Login realizado com sucesso!&quot;);
break;
} else {
console.log(&quot;Usuário ou senha incorretos! Tente novamente.&quot;);

}
}

while (true) {
let comando = prompt(&quot;Você está logado!\nDigite &#39;sair&#39; para fazer logout.&quot;);

if (comando.toLowerCase() === &quot;sair&quot;) {
console.log(&quot;Logout realizado com sucesso!&quot;);
break;
}
}