import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeReactiveComponent } from './edit-employee-reactive/edit-employee-reactive.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { FilterPipe } from './component-interaction/filter.pipe';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    TwoWayBindingComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    EditEmployeeReactiveComponent,
    ComponentInteractionComponent,
    FilterPipe,
    LoginComponent,
    UserComponent,
    EmployeeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: EmployeeDetailsComponent },
      { path: 'app-employee-details', component: EmployeeDetailsComponent },
      { path: 'app-edit-employee', component: EditEmployeeComponent, canActivate: [AuthGuard] },
      { path: 'app-interpolation', component: InterpolationComponent },
      { path: 'app-two-way-binding', component: TwoWayBindingComponent },
      { path: 'app-edit-employee-reactive', component: EditEmployeeReactiveComponent, canActivate: [AuthGuard] },
      { path: 'app-component-interaction', component: ComponentInteractionComponent },
      { path: 'app-employee-info/:Id', component: EmployeeInfoComponent, canActivate: [AuthGuard] },
      { path: 'app-login', component: LoginComponent },
      { path: 'app-user', component: UserComponent }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
