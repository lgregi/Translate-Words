import { Component } from '@angular/core';
import { Lucas } from './Sharerd/Final.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app1';// é a classe que recebe os metadados citados acima
  // quando for instanciada, trará juntos todos os componentes
  

public JogoEmAndamento: boolean = true
public jogoteste: boolean = false
public tipoencerramento:string = ""
public Lucas : Lucas[] = [
  new Lucas(),
  
]


  public encerrarJogo(tipo: string) :void{
    //console.log(tipo);
    this.JogoEmAndamento=false
    this.tipoencerramento=tipo
    this.jogoteste=true
  }
  public reiniciarJogo():void {
    this.JogoEmAndamento=true
    this.tipoencerramento=""
  }
}

