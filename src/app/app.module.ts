import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRouting } from './appRouting';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { ParticlesModule } from 'angular-particle';
import { FooterComponent } from "./footer/footer.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomePageComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		AppRouting,
		NgxPageScrollModule,
		ParticlesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
