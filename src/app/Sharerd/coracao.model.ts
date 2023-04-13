export class Coracao{
    constructor(
        public cheio:boolean,
        public UrlCoracaoCheio:string ="/assets/coracao_cheio.png",
        public UrlCoracaoVazio:string ="/assets/coracao_vazio.png"
    ){

    }

    public exibecoracao(): string{

        if(this.cheio){
            return this.UrlCoracaoCheio
        } else{
            return this.UrlCoracaoVazio
        }

       
    }
}