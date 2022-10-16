import { Component } from '@angular/core';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'meu-teste-angular';

  constructor(private filmeService: FilmeService){

  }
// obterTodosFilmes(){
//   this.filmeService.obterTodos()
//     .then(filmes=> console.log(filmes))
//     .catch(error=> console.log(error));
// }

}


