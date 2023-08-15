import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../Sharerd/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnDestroy {

  public frases: Frase[] = FRASES // atributo que recebe as frase da mock
  public instrucao: string = 'TRADUZA ESSA FRASE'
  public resposta: string = ''
  public upper: string = ''
  public faz: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0 // criada para atribuir valor a variavel de outro component


  public tentativas: number = 3
  //serve para se comunicar com a classe pai
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.Atualizadodada()
    this.rodadaFrase = this.frases[this.rodada];//// recebe a frase da posica de rodada
    //console.log(this.rodadaFrase)

  }
  ngOnDestroy() {
    //console.log('componente painel foi destruido')

  }

  atualizaresposta(resposta: Event): void // precisa colocar o event para receber o evento
  {
    
    this.resposta = ((<HTMLInputElement>resposta.target).value)
    this.upper = this.resposta.toUpperCase()
    //console.log(this.resposta)

  }
  testandominhalabel(respos: Event): void {
    this.faz = ((<HTMLInputElement>respos.target).value)
    console.log(this.faz)

  }


  verificaresposta(): void {

    if (this.rodadaFrase.FrasePTbr == this.upper) {

      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)
      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria')
        alert('Traduções concluídas com sucesso!')
      }
      this.Atualizadodada()

    } else {
      alert('a tradução está errada')
      this.tentativas--
      this.resposta = '' // limpa a resposta
      if (this.tentativas == -1) {
        this.encerrarJogo.emit('derrota')
        alert('você perdeu todas as tentativas')
      }
    }
    // console.log(this.tentativas)
  }
  Atualizadodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = ''
    this.upper = ''

  }
}
