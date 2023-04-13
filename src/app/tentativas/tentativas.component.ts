import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Coracao } from '../Sharerd/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  public coracaoVazio: string = "/assets/coracao_vazio.png"
  public coracaoCheio: string= "/assets/coracao_cheio.png"
  @Input() public tentativas: number=0

  public coracoes : Coracao[] = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]
  constructor(){
    //console.log(this.coracoes)
    
  }
  ngOnChanges(){
    if(this.tentativas !== this.coracoes.length){
      let indie = this.coracoes.length -this.tentativas
      this.coracoes[indie-1].cheio=false
      //console.log("aaaaa"+this.tentativas)
    }
  }
  ngOnInit(){
   // console.log(this.tentativas)
  }
  
}
