let sistema = prompt(&quot;Qual sistema você deseja escolher:Cmd ou Linux? &quot;)

if (sistema == &quot;CMD&quot; || sistema == &quot;cmd&quot;){
console.log(&quot;modo cmd ativado&quot;)

let cmd = prompt(&quot;Qual comando gostaria de aprender?: &quot;)

switch(cmd){
case &quot;dir&quot;:
console.log(&quot;Acessar uma pasta e verificar o conteúdo&quot;)
break;

case &quot; cd..&quot;:
console.log(&quot;Voltar ao diretório anterior&quot;)
break;

case &quot;cd+nome da pasta&quot;:
console.log(&quot;Entrar na pasta&quot;)

case &quot;copy&quot;:
console.log(&quot;copiar um aqruivo para outro diretório&quot;)
break;

case &quot;cls&quot;:
console.log(&quot;limpa toda a tela&quot;)
break;

case &quot;mkdir&quot;:
console.log(&quot;criar um diretório&quot;)

break;

case &quot;rmdir&quot;:
console.log(&quot;remiver o diretótio&quot;)
break;

case &quot;echo&quot;:
console.log(&quot;Criar um arquivo&quot;)
break;

case &quot;del&quot;:
console.log(&quot;apagar&quot;)
break;

case &quot;ren&quot;:
console.log(&quot;renomear&quot;)
break;

case &quot;move+nome da pasta&quot;:
console.log(&quot;mover o aqruivo para outra pasta&quot;)
break

case &quot;exit&quot;:
console.log(&quot;fechar a janela do cmd&quot;)
break;

default:
console.log(&quot;esse comando é inválido&quot;)
break;

}

}
else if(sistema == &quot;linux&quot; || sitema == &quot;Linux&quot;){
console.log(&quot;modo linux ativado&quot;)
let linux = prompt(&quot;Qual comando gostaria de aprender?: &quot;)

switch(linux){
case &quot;ls&quot;:
console.log(&quot;Acessar as pastas e verificar o conteúdo&quot;)
break;

case &quot;cd+nome da pasta&quot;:
console.log(&quot;entrar na pasta&quot;)
break;

case &quot;cd ..&quot;:
console.log(&quot;voltar para o diretório anterior&quot;)
break;

case &quot;cat+nome do arquivo&quot;:
console.log(&quot;verificar o que tem dentro do arquivo&quot;)
break;

case &quot;rm -r+nome da pasta&quot;:
console.log(&quot;remover pasta&quot;)
break;

case &quot;mv+nome do arquivo+caminho até a pasta que desejar&quot;:

console.log(&quot;mover para outra pasta&quot;)
break;

case &quot;rm+nome do arquivo&quot;:
console.log(&quot;remover o arquivo&quot;)
break;

case &quot;cp+nome do arquivo / + caminho até até a pasta&quot;:
console.log(&quot;copiar o arquivo para outra pasta&quot;)
break;

case &quot;clear&quot;:
console.log(&quot;limpar a tela&quot;)
break;

default:
console.log
break;
}
}
else{
console.log (&quot;comando inválido&quot;)
}ECHO est  ativado.
