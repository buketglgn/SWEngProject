import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { NaviComponent } from './components/navi/navi.component';

import { SearchBookPipe } from './pipes/search-book.pipe';
import { LoginComponent } from './components/login/login.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserFavBooksComponent } from './components/user-fav-books/user-fav-books.component'




@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    LeftMenuComponent,
    BooksComponent,
    SearchBookPipe,
    LoginComponent,
    BookDetailsComponent,
    UserFavBooksComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })

    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
       useClass:AuthInterceptor,
        multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
