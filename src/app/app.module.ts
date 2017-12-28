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
import { FooterComponent } from './footer/footer.component';
import { NgxCarouselModule } from 'ngx-carousel';
import { CardTeamMemberComponent } from './card-team-member/card-team-member.component';
import { BlogPageComponent } from './blog-page/blog-page.component';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomePageComponent,
		FooterComponent,
		CardTeamMemberComponent,
		BlogPageComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		AppRouting,
		NgxPageScrollModule,
		ParticlesModule,
		NgxCarouselModule,

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
