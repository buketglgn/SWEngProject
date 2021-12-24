

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserBooksComponent } from './components/user-books/user-books.component';
import { UserFavBooksComponent } from './components/user-fav-books/user-fav-books.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:BooksComponent},
  {path:"books", component:BooksComponent},
  {path:"books/:filterText", component:BooksComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:'bookDetail/:id',component:BookDetailsComponent},
  {path:'books/:filterText', component:BooksComponent},
  {path:'userFavBooks', component:UserFavBooksComponent},
  {path:'userBooks', component:UserBooksComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
