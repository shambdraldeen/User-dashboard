import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Config } from 'src/app/services/config.service ';
import { SearchService } from 'src/app/services/search.service';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchTerm: string = '';
  dir: Direction="ltr";

  constructor(public translate: TranslateService, private searchService: SearchService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

  }

  ngOnInit(): void {}

  onSearchChange(): void {
    this.searchService.updateSearchTerm(this.searchTerm); // Update search term
  }
   // Function to toggle between English and Arabic
   toggleLanguage(): void {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'ar' : 'en'; // Toggle logic
    this.translate.use(newLang); // Change language
    if(newLang=="ar"){
       Config.dir="rtl";
       this.dir=Config.dir as Direction;
    }
    else{
       Config.dir="ltr";
       this.dir=Config.dir as Direction;
    }
  }
}
