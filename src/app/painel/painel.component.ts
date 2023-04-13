import { Component, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Frase } from '../Sharerd/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnDestroy {

  public frases:Frase[] =FRASES // atributo que recebe as frase da mock
  public instrucao: string= 'TRADUZA ESSA FRASE'
  public resposta:string= ''
  public faz:string= ''

  public rodada:number= 0
  public rodadaFrase:Frase
  public progresso: number= 0 // criada para atribuir valor a variavel de outro component


  public tentativas:number= 3
  //serve para se comunicar com a classe pai
  @Output() public encerrarJogo: EventEmitter<string>= new EventEmitter()
  
  constructor(){
    this.Atualizadodada()
    this.rodadaFrase = this.frases[this.rodada];//// recebe a frase da posica de rodada
    //console.log(this.rodadaFrase)
    
  }
  ngOnDestroy() {
    //console.log('componente painel foi destruido')
      
  }
  
  atualizaresposta(resposta: Event):void // precisa colocar o event para receber o evento
{
  // função que esta sendo utilizada toda vez que há imput de dados 
  // <textarea class="form-control" rows="3" (input)="atualizaresposta($event)"></textarea> no angula para recupera os dados diguitados
  this.resposta=((<HTMLInputElement>resposta.target).value)
  //console.log(this.resposta)

}
testandominhalabel(respos:Event):void{
  this.faz =((<HTMLInputElement>respos.target).value)
  console.log(this.faz)

}


verificaresposta():void {
  //console.log( 'verificaresposta', this.resposta)

  if(this.rodadaFrase.FrasePTbr == this.resposta){
    //alert(' frase está correta')
    this.rodada++

    //this.progresso= this.progresso +25//ou
    this.progresso= this.progresso +(100/this.frases.length)
   // console.log(this.progresso)
    if(this.rodada===4){
      this.encerrarJogo.emit('vitoria')
      alert('Traduções concluídas com sucesso!')
    }
    //atualiza a rodada
    this.Atualizadodada()
    //this.rodadaFrase = this.frases[this.rodada] // recebe a frase da posica de rodada
    //console.log(this.rodadaFrase)

   

  } else{
    alert('a tradução está errada')
    this.tentativas --
    if(this.tentativas==-1){
      this.encerrarJogo.emit('derrota')
      alert('você perdeu todas as tentativas')
    }
  }
 // console.log(this.tentativas)
}
 Atualizadodada() : void{
  this.rodadaFrase = this.frases[this.rodada];//// recebe a frase da posica de rodada
  this.resposta='' // limpa a resposta
 }

}
