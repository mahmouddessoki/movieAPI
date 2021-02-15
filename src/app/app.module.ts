import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchPipe } from './movie-search.pipe';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PersonSearchPipe } from './person-search.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    TvshowComponent,
    MoviesComponent,
    PeopleComponent,
    NotfoundComponent,
    MovieDetailsComponent,
    MovieSearchPipe,
    TvDetailsComponent,
    PeopleDetailsComponent,
    PersonSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
