import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { AppComponent } from './app.component';
import { CongratulationComponent } from './components/congratulation/congratulation.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'congratulation', component: CongratulationComponent },
  { path: 'question/:id', component: QuestionComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
