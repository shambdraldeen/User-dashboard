import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { Config } from 'src/app/services/config.service ';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user: any = null; // Store user details
  isLoading: boolean = false; // Loading state

  constructor(private route: ActivatedRoute,
              private service: ApiService) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.fetchUserDetails(Number(userId));
    }
  }

  fetchUserDetails(id: number): void {
    this.isLoading = true; // Show loading bar
    this.service.getUserById(id).subscribe((response: any) => {
      this.user = response.data; // Save user data
      this.isLoading=false;
    });
  }

}
