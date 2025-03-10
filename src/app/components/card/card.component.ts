import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { Config } from 'src/app/services/config.service ';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  array: any[] = [];
  filteredArray: any[] = []; // Array to hold filtered users
  totalUsers: number = 12; // Total number of users for pagination
  currentPage: number = 1; // Default page
  pageSize: number = 6; // Number of users per page
  isLoading: boolean = false; // Loading state

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private service: ApiService,
              private searchService: SearchService) {}

  ngOnInit(): void {
    this.loadUsers(this.currentPage);
    // Subscribe to search term updates
    this.searchService.currentSearchTerm.subscribe((term) => {
      this.filterUsers(term);
    });
  }

  loadUsers(page: number): void {
    this.isLoading = true; // Show loading bar
    this.service.getUsers(page).subscribe((response: any) => {
      this.array = response.data;
      this.filteredArray = [...this.array]; // Initialize filteredArray with array data
      this.filterUsers(this.searchService.getSearchTerm()); // Filter users after loading
      this.isLoading = false; // Hide loading bar
    });
  }

  filterUsers(term: string): void {
    if (term) {
      const sanitizedTerm = term.replace(/\s+/g, ''); // Remove all spaces
      this.filteredArray = this.array.filter((user) => user.id.toString() === sanitizedTerm);
    } else {
      this.filteredArray = [...this.array]; // Reset to all users
    }
  }

  handlePageEvent(event: any): void {
    this.currentPage = event.pageIndex + 1; // MatPaginator starts from 0
    this.loadUsers(this.currentPage);
  }
}
