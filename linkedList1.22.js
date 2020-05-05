class Node {
    constructor(siguiente = null){
        this.siguiente = siguiente;
        this.numControl = 0;
        this.nombre = "";
        this.sexo = "";
    }

    showInfo() {
        return "No. Control: " + this.numControl + " Nombre: " + this.nombre
        + " Sexo: " + this.sexo;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //inserta elementos
    agregar(nuevo){
        if(this.head===null)
        this.head=nuevo;
        else{
            let temporal=this.head;
            while(temporal.siguiente!=null)
            temporal=temporal.siguiente;
            temporal.siguiente=nuevo;
        }
    }
    //borrar lista
    borrarLista() {
        this.head = null;
        this.size = 0;
    }

    //imprime la lista 
    mostrar(){
        let resultado="";
        let temp=this.head;
        while(temp!=null){
          resultado += temp.showInfo() + " , ";
          temp=temp.siguiente;
        }
        return resultado;
      }
}

let list = new LinkedList();
let nuevo;

nuevo = new Node();
nuevo.numControl = 1234;
nuevo.nombre = "Ramiro";
nuevo.sexo = "Masculino";
list.agregar(nuevo);

nuevo = new Node();
nuevo.numControl = 4321;
nuevo.nombre = "Angelica";
nuevo.sexo = "Femenino";
list.agregar(nuevo);

nuevo = new Node();
nuevo.numControl = 666;
nuevo.nombre = "Asmael";
nuevo.sexo = "Masculino";
list.agregar(nuevo);

//list.borrarLista();
console.log(list.mostrar());
