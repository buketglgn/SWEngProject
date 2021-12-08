import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { NaviComponent } from './components/navi/navi.component';
<<<<<<< HEAD
import { SearchBookPipe } from './pipes/search-book.pipe';
import { LoginComponent } from './components/login/login.component';

=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
>>>>>>> 856864ee46793170d8012f860d75904472f12655




@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    LeftMenuComponent,
<<<<<<< HEAD
    BooksComponent,
    SearchBookPipe,
=======
>>>>>>> 856864ee46793170d8012f860d75904472f12655
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule
=======
    BrowserAnimationsModule,
>>>>>>> 856864ee46793170d8012f860d75904472f12655
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
