import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { AuthenticationService } from './authentication.service';
// import { routingComponents, AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { LoginComponent } from './login/login.component';
// import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    //routingComponents,,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    // LoginComponent,
    // HomepageComponent,
  
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    //AppRoutingModule,
    //FormsModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

