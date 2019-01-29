import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { LifeStyleService } from './services/life-style.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { LifeStyleComponent } from './components/life-style/life-style.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AccountComponent } from './components/account/account.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RetirementIncomeComponent } from './components/retirement-income/retirement-income.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MatSliderModule, MatButtonModule, MatProgressSpinnerModule,
  MatFormFieldModule, MatSelectModule, MatTabsModule,
  MatDatepickerModule, MatSlideToggleModule,
  MatCheckboxModule, MatCardModule, MatDividerModule,
  MatRadioModule, MatChipsModule, MatSnackBarModule } from '@angular/material';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LifeStyleComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    RetirementIncomeComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatSliderModule, MatButtonModule, MatProgressSpinnerModule,
  MatFormFieldModule, MatSelectModule, MatTabsModule,
  MatDatepickerModule, MatSlideToggleModule,
  MatCheckboxModule, MatCardModule, MatDividerModule,
  MatRadioModule, MatChipsModule, MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    LifeStyleService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
