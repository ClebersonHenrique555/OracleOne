<meta charset="UTF-8">
<script>
var peso = parseInt(prompt("digite um numero"));
  var altura = parseInt(prompt("digite um numero"));
   function pulaLinha(){
       document.write("<br>")
   }
   var ano=2022;
   var x = ano - 1500;

  function mostra(frase){
        document.write(frase);
  }
  //var peso = parseInt(prompt("digite um numero"));
  //var altura = parseInt(prompt("digite um numero"));
  function calculaImc(){
      return peso / (altura*altura);
      
  }
  document.write(imc);
  
 
 if (imc<=18.5){
alert("Está mal em")
 }else if(imc>18.6){
alert("Na média em")
 }else if(imc>=35){
alert("Rapaz, está muito mal")
 }
</script>
