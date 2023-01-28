import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { KeysComponent } from './components/keys/keys.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'keys', component: KeysComponent },
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
