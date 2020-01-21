import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';
import { QuestionService } from './services/question.service';
import { CongratulationComponent } from './components/congratulation/congratulation.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    WelcomeComponent,
    ErrorComponent,
    CongratulationComponent
  ],
  imports: [
    LottieModule.forRoot({ player: playerFactory }),
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
