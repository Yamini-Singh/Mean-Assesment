import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoggedinpageComponent } from './loggedinpage/loggedinpage.component';
import { MoviesComponent } from './movies/movies.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup' , component: SignupComponent},
    { path: 'home', component: HomeComponent },
    { path: 'loggedinpage', component: LoggedinpageComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'tvseries', component:TvseriesComponent },
    { path: 'edit', component:EditComponent },
    { path: '', component: HomeComponent },
    { path: '*', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent,HomeComponent,SignupComponent,LoggedinpageComponent,MoviesComponent,TvseriesComponent,EditComponent ];