import { not } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { RoutingGuardGuard } from './routing-guard.guard';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [

  {path : '' , redirectTo : "register"  , pathMatch : 'full'},
  {path : 'login' , component : LoginComponent },
  {path : 'register' , component : RegisterComponent },
  {path : 'home' , canActivate:[RoutingGuardGuard] ,component : HomeComponent },
  {path : 'movies' , canActivate:[RoutingGuardGuard] ,component : MoviesComponent },
  {path : 'tvshow' , canActivate:[RoutingGuardGuard] ,component : TvshowComponent },
  {path : 'people' , canActivate:[RoutingGuardGuard] ,component : PeopleComponent },
  {path : 'about' , canActivate:[RoutingGuardGuard] ,component : AboutComponent },
  {path : 'movieDetails/:id' , canActivate:[RoutingGuardGuard] ,component : MovieDetailsComponent },
  {path : 'tvDetails/:id' , canActivate:[RoutingGuardGuard] ,component : TvDetailsComponent },
  {path : 'personDetail/:id' , canActivate:[RoutingGuardGuard] ,component : PeopleDetailsComponent },

  {path : "**" ,canActivate:[RoutingGuardGuard] , component : NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
