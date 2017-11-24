import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRouting } from './appRouting';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { PublicationsComponent } from './publications/publications.component';
import { ScrollStoreModule } from 'scrollStore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorkComponent,
    PublicationsComponent
  ],
  imports: [
    ScrollStoreModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRouting

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
