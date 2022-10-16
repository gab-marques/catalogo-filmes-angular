import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

const baseUrl = 'https://api-catalogo-filmes-gab.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

constructor(private httpClient: HttpClient) { }

list(): Observable<any>{
  return this.httpClient.get(`${(baseUrl)}/api/filmes`);
}

create (filmes:any): Observable<any>{
  console.log(JSON.stringify(filmes) + " Enviado para a API");
  const body = new HttpParams()
  .set('genero', filmes.genero)
  .set('titulo', filmes.titulo)
  .set('data_lancamento', filmes.data_lancamento)
  .set('diretor', filmes.diretor)
  .set('lista_atores', filmes.lista_atores)
  .set('imagem', filmes.imagem);

  console.log(JSON.stringify(filmes) + " Enviado para a API");
  return this.httpClient.post(`${(baseUrl)}/api/inserirFilme`, body)
};

list_genero():Observable<any>{
  return this.httpClient.get(`${(baseUrl)}/api/filmes-genero`);
}

create_genero(genero:any):Observable<any>{
  console.log(JSON.stringify(genero) + " recebido");
  const body = new HttpParams()
  .set('genero', genero.genero);

  return this.httpClient.post(`${(baseUrl)}/api/inserirGenero`, body)
}


}

