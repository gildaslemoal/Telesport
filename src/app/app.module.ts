import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TitleComponent } from "./title/title.component";
import { HeaderComponent } from './header/header.component';
import { ContextComponent } from './context/context.component';
import { PieComponent } from './pie/pie.component';
import { RouterLink } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { NumbersComponent } from './numbers/numbers.component';
import { LineComponent } from './line/line.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, TitleComponent, HeaderComponent, ContextComponent, PieComponent, RouterLink, NumbersComponent, LineComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
