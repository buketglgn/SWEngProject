

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { UserFavBooksComponent } from './components/user-fav-books/user-fav-books.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:BooksComponent},
  {path:"books", component:BooksComponent},
  {path:"books/:filterText", component:BooksComponent},
  {path:"login", component:LoginComponent},
  {path:'bookDetail/:id',component:BookDetailsComponent},
  {path:'books/:filterText', component:BooksComponent},
  {path:'userFavBooks', component:UserFavBooksComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
