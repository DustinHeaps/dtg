import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "case-study", component: CaseStudyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
