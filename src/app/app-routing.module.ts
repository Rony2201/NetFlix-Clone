import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';

const routes: Routes = [
  {path: 'loading-page', component: LoadingPageComponent},
  {path: '', component: UsersComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
