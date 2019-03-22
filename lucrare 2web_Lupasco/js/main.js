

function sum() {
    let a1 = document.getElementById('x').value;
    let a2 = document.getElementById('y').value;
    a1 = Number.parseInt(a1);
    a2 = Number.parseInt(a2);
    a2 += a1;
    let rez = document.getElementById("rez").innerText = a2;
  }
  
  document.getElementById("sum").onclick = function() {
    sum();
  }
    //PUNCTU 2

    let block = documen.querySelector('#container');
    block = addEventListener('mousemove', function(){
    block = classList.add('red');
})

    block = addEventListener('mouselive', function(){
    block = classList.remove('red');
  })
  //PUNCTU 3
  function paragrah(){
  var paragraph = document.getElementById("paragraf").children;
	let i;
	for (i = 0; i < paragraph.length; i++) {
		if (i % 2 == 0) {
			paragraph[i].style.backgroundColor = "yellow";
		} else {
			paragraph[i].style.backgroundColor = "blue";
		}
    };
}
 