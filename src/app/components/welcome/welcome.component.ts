import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { Subscription } from 'rxjs';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnDestroy {
  subscriptions: Subscription[];

  options: AnimationOptions = {
    path: "https://assets3.lottiefiles.com/packages/lf20_ZWEJL5.json"
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  
  levels = ["Easy", "Medium", "Hard"];
  selectedLevel: string;

  constructor(private questionService: QuestionService,
    private router: Router) {
    this.subscriptions = [];
    this.selectedLevel = this.levels[0];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  levelChanged(level) {
    this.selectedLevel = level;
  }

  startGame() {
    this.subscriptions.push(
      this.questionService.fetchQuestions(this.selectedLevel).subscribe(() => {
        this.router.navigate(['/question', 1])
      })
    );
  }
}
