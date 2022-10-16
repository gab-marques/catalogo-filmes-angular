import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { CadastroGeneroComponent } from './cadastro-genero/cadastro-genero.component';

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: TesteComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-genero', component: CadastroGeneroComponent }
]


@NgModule({
exports:[RouterModule],
imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
