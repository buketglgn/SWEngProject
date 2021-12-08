import { LoginComponent } from './components/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:BooksComponent},
  {path:"books", component:BooksComponent},
  {path:"books/:filterText", component:BooksComponent},
  {path:"login", component:LoginComponent}
=======
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', 
  component: LoginComponent}
>>>>>>> 856864ee46793170d8012f860d75904472f12655
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
