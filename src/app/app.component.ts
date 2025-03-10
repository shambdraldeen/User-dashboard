import { Direction } from '@angular/cdk/bidi';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Config } from './services/config.service ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'project1';
  dir: Direction="ltr";
  constructor(public translate: TranslateService) {
    this.translate.onLangChange.subscribe((e: Event) => {
      this.dir=Config.dir as Direction;
    });

  }

}
