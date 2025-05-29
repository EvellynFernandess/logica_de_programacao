let usuariodigitado = prompt(&quot;Digite seu nome de usuário: &quot;);
let senhadigitada = prompt(&quot;Digite sua senha: &quot;);
let resultado = &quot;&quot;;

let usuario1 = &quot;Evellyn&quot;, senha1 = &quot;evellyn2009&quot;
let usuario2 = &quot;Mateus&quot;, senha2 = &quot;mateus2016&quot;
let usuario3 = &quot;Ester&quot;, senha3 = &quot;ester3207&quot;
let usuario4 = &quot;admin 1&quot;, senha4 = &quot;arroz&quot;
let usuario5 = &quot;admin 2&quot;, senha5 = &quot;alequinho&quot;
let usuario6 = &quot;admin 3&quot;, senha6 = &quot;evellyng&quot;
let usuario7 = &quot;admin 4&quot;, senha7 = &quot;arroz&quot;
let usuario8 = &quot;admin 5&quot;, senha8 = &quot;moto&quot;
let usuario9 = &quot;admin 6&quot;, senha9 = &quot;alex1983&quot;

function verificarlogin(usuario, senha) {
let mensagem = &quot;&quot;;

if (usuariodigitado === usuario1 &amp;&amp; senhadigitada === senha1) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario2 &amp;&amp; senhadigitada === senha2) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario3 &amp;&amp; senhadigitada === senha3) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario4 &amp;&amp; senhadigitada === senha4) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario5 &amp;&amp; senhadigitada === senha5) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario6 &amp;&amp; senhadigitada === senha6) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario7 &amp;&amp; senhadigitada === senha7) {
mensagem = &quot;Login efetuado com sucesso!&quot;;

} else if (usuariodigitado === usuario8 &amp;&amp; senhadigitada === senha8) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else if (usuariodigitado === usuario9 &amp;&amp; senhadigitada === senha9) {
mensagem = &quot;Login efetuado com sucesso!&quot;;
} else {
mensagem = &quot;Login negado. Usuário ou senha incorretos.&quot;;
}

return mensagem;
}

resultado = verificarlogin(usuariodigitado, senhadigitada);
console.log(resultado);
