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
import { AddEventPortletComponent } from './components/add-event-portlet/add-event-portlet.component';
import { ListEventPortletComponent } from './components/list-event-portlet/list-event-portlet.component';
import { EventComponent } from './components/event/event.component';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';
import {NotifierModule} from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SettingsComponent,
    AdminComponent,
    DashboardComponent,
    NotFoundComponent,
    AddEventPortletComponent,
    ListEventPortletComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMultiSelectModule,
      NotifierModule.withConfig( {
          position: {
              horizontal: {
                  position: 'right',
                  distance: 12
              },
              vertical: {
                  position: 'top',
                  distance: 12,
                  gap: 10
              }
          }
      } ),
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
