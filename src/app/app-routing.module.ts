import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: 'Nosotros',
    pathMatch: 'full',
    component: NosotrosComponent

  },

  {
  path: 'Login',
  component:LoginComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
