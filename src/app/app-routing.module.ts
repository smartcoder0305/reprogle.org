import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { KeysComponent } from './pages/keys/keys.component';
import { MainComponent } from './pages/main/main.component';
import {BlogComponent} from "./pages/blog/blog.component";
import {BlogPostComponent} from "./components/blog-post/blog-post.component";

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'keys', component: KeysComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
