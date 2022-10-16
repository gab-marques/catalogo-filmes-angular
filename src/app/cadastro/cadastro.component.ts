import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  titulo: any;
  data_lancamento: any;
  genero:any;
  diretor:any;
  item:any;
  cod_genero:any;
  lista_atores: any;
  imagem:any;

  constructor(private filmeService: FilmeService){ }

  save_filme(): void {
    const dados = {
      genero:this.cod_genero.codigo,
      titulo: this.titulo,
      data_lancamento: this.data_lancamento,
      diretor:this.diretor,
      lista_atores: this.lista_atores,
      imagem: this.imagem
    };
    //console.log("ITEMM " + JSON.stringify(this.cod_genero));
    this.filmeService.create(dados)
      .subscribe(
        response => {
          console.log(response);
          
        },
        error => {
          console.log(error);
        }
      )
    }

  obterTodosGeneros(){
    this.filmeService.list_genero()
      .subscribe(
        data=> {
          this.genero = data.result;

          //this.filme = "teste";
          console.log(this.genero);
          // console.log(this.codigo[0].codigo);
        }, 
        error => {
          console.log(error);
        }
      );
      };

      obterTodosFilmes(){
        this.filmeService.list()
          .subscribe(
            data=> {
              this.titulo = data.result;
              this.lista_atores = data.result;
              //this.filme = "teste";
              console.log(this.titulo);
            }, 
            error => {
              console.log(error);
            }
          );
       };

  ngOnInit(): void {
    this.obterTodosGeneros();
    // this.obterTodosFilmes();
  }

}



