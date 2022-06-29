/*const Inputs = document.querySelectorAll('input');
document.getElementById('enviar').addEventListener('click', () => {
    let form = [...Inputs].map(item => {
    return {id:item.id, value:item.value};
  });
    window.localStorage.setItem('form', JSON.stringify(form));
  window.location.href = 'pagina2.html';
});

let form2 = JSON.parse(window.localStorage.getItem('form'));*/

var variableX=10;


var miWindows=0;
	$(document).ready(function()
	{
		miWindow=window.open("pagina2.html","target");
	});
