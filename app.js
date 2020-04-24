class Rectangulo{

	constructor(base, altura){
		this.base = base;
		this.altura = altura;
	}

	area(){

		return this.base * this.altura;
	}
}

const btn = document.getElementById("btnRectangulo");

btn.addEventListener('click',()=>{

	var base = parseInt(document.getElementById("base").value);
	var altura = parseInt(document.getElementById("altura").value);

	var rectangulo1 = new Rectangulo(base,altura);
	var divResultados = document.getElementById("resultados");

	divResultados.innerHTML = "<p>Rectangulo con base: " + rectangulo1.base + " y altura: "
	+ rectangulo1.altura + "<p>";

	divResultados.innerHTML += "<p> con area de: " + rectangulo1.area() + "<p>";

	document.getElementById("base").value = "";
	document.getElementById("altura").value = "";
});


//CUADRADO
class Cuadrado{

	constructor(lado){
		this.lado = lado;
	}

	area(){
		return this.lado * this.lado;
	}
}

const btnCuadro = document.getElementById("btnCuadrado");

btnCuadro.addEventListener('click',()=>{

	var lado = parseInt(document.getElementById("base").value);
	
	var cuadrado1 = new Cuadrado(lado);
	var divResultados = document.getElementById("resultados");

	divResultados.innerHTML = "<p>Cuadrado con lados de: " + cuadrado1.lado + "<p>";
	divResultados.innerHTML += "<p> con area de: " + cuadrado1.area() + "<p>";

	document.getElementById("base").value = "";
});


//TRIANGULO
class Triangulo{

	constructor(base, altura){
		this.base = base;
		this.altura = altura;
	}

	area(){

		return (this.base * this.altura)/2;
	}
}

const btnTri = document.getElementById("btnTriangulo");

btnTri.addEventListener('click',()=>{

	var base = parseInt(document.getElementById("base").value);
	var altura = parseInt(document.getElementById("altura").value);

	var triangulo1 = new Triangulo(base,altura);
	var divResultados = document.getElementById("resultados");

	divResultados.innerHTML = "<p>Triangulo con base: " + triangulo1.base + " y altura: "
	+ triangulo1.altura + "<p>";

	divResultados.innerHTML += "<p> con area de: " + triangulo1.area() + "<p>";

	document.getElementById("base").value = "";
	document.getElementById("altura").value = "";

});