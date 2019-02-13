import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './views/settings/settings.component';
import { AdminComponent } from './views/admin/admin.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SettingsComponent,
    AdminComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
