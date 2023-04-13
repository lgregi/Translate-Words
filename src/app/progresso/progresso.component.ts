import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent {

  @Input('recebendo')public progress: number=75 // o input serve para receber parâmetros internos e precisa ser impotada

}
