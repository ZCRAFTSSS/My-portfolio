alert(' ALERT:TURN ON DESKTOP SITE')
let name = prompt('hey what\'s your name')
name = name.toUpperCase(name)
document.getElementById('b1').innerHTML = `${name}`
document.getElementById('he3').addEventListener("click", function(){
  document.getElementById('he3').innerHTML = `ZCRAFTSSS AKA ZAHIR <BR> THE 14 YEAR OLD BOY <BR> MY DREAM IS IIT I WANT TO <BR> BECAME <BR> FULL STACK DEVELOPER`
  setTimeout(function() {
    document.getElementById('b2').innerHTML = `IF YOU WAN\'T TO CONTECT ME`
  }, 2000);
})
document.getElementById('body').addEventListener('copy',function(){
  document.write('<h1>plz don\'t copy</h1>')
  setInterval(function() {
    document.write('<H1>DON\T COPY</H1>') 
    document.write('<H1>DON\T COPY</H1>')
    document.write('<H1>DON\T COPY</H1>') 
    document.write('<H1>DON\T COPY</H1>')
    document.write('<H1>DON\T COPY</H1>') 
    document.write('<H1>DON\T COPY</H1>')
    document.write('<H1>DON\T COPY</H1>') 
    document.write('<H1>DON\T COPY</H1>') 
    document.write('<H1>DON\T COPY</H1> <br>')
  }, 1000);
})