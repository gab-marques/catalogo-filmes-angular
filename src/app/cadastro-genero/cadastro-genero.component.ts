import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-cadastro-genero',
  templateUrl: './cadastro-genero.component.html',
  styleUrls: ['./cadastro-genero.component.css']
})
export class CadastroGeneroComponent implements OnInit {
 genero:any;

  constructor(private filmeService: FilmeService){ }

  ngOnInit(): void {
    this.obterTodosGeneros();
  }

  save(): void {
    const dados = {
      genero:this.genero,
    };
    console.log(dados);
    this.filmeService.create_genero(dados)
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
          }, 
          error => {
            console.log(error);
          }
        );
        }
}
