import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  filme:any;
  genero:any;
  
  

  constructor(private filmeService: FilmeService){

  }
  ngOnInit(): void {
    this.obterTodosFilmes();
  }
  obterTodosFilmes(){
    this.filmeService.list()
      .subscribe(
        data=> {
          this.filme = data.result;
          //this.filme = "teste";
          console.log(this.filme);
        }, 
        error => {
          console.log(error);
        }
      );
  }
  // obterTodosFilmes(){
  //   this.filmeService.obterTodos()
  //     .then(filmes=> console.log(filmes))
  //     .catch(error=> console.log(error));
  // }
 

}
