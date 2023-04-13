import { Component } from "@angular/core";

@Component({
    selector:'app-topo', // se colocar um ponto no inicio, posso transformar em classe
    templateUrl:'./topo.component.html',
    styleUrls:['./topo.component.css']
    //styles:['.exemplo{color:red}']
   // template: // é pssoivel passar o html aqui mesmo, utilizando este comando

})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês'
}

