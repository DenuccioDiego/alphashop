import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { component } from 'vue/types/umd';
import { ErrorComponent } from './error/error.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },// direttiva che punta alla WelcomeComponent quando URL è vuoto
  { path: 'home/:userid', component: WelcomeComponent },// rotta che punta al componente passando un parametro "home/:userid"
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListComponent },
  { path: '**', component: ErrorComponent }, // direttiva che serve a reinderizzare l'utente su una pagina di errore nel caso di errore del URL
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
