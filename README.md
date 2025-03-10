User Dashboard - Angular Application

This project is a dynamic user dashboard built with Angular 7+, leveraging advanced Angular features and practices, including state management, caching, observables, and custom directives. The application offers a rich user experience with responsive design, smooth navigation, and instant data updates.

Features
  1-User List with Pagination: Displays a list of users, retrieved from the https://reqres.in API, using Angular Material for styling and pagination.
  
  2-Search Functionality: Search users instantly by ID using the header's search field. Navigates to detailed user information if the ID exists.
  
  3-User Details Page: Provides detailed information about a specific user with a back button to return to the main user list.
  
  4-Dynamic Language Support: Toggle between English (ltr) and Arabic (rtl) seamlessly.

  5-Caching: Efficient caching to minimize redundant HTTP requests and enhance performance.

  6-Loading Bar: Displays a loading spinner to improve user experience during network requests.

  7-State Management: Implements state management for consistent and efficient data handling.

  8-Custom Directives: Enhances functionality and interactions with reusable directives.

  9-Styling & Animations: Fully styled using Angular Material, with animations for smooth UI interactions.

<--Tech Stack-->

 -Framework: Angular 7+ (CLI-generated)

 -Styling: Angular Material, CSS, and responsive design

 -State Management: RxJS for observables and reactive programming

 -Routing: Angular Router for navigation

 -HTTP Client: Angular HTTP Client for API communication

 -Multilingual Support: @ngx-translate/core for language toggling

 -Caching: Local caching with Map and observables

Installation
Clone this repository:

bash
git clone <repository-url>

cd <repository-folder>

Install dependencies:

bash

npm install

Run the development server:

bash

ng serve

The application will be available at http://localhost:4200.

API Endpoints
The application interacts with the following endpoints from the ReqRes API:

Paginated User List:

URL: https://reqres.in/api/users?page={page}

Purpose: Fetch paginated user data, including avatar, first and last name, and ID.

User Details:

URL: https://reqres.in/api/users/{id}

Purpose: Fetch detailed information for a specific user.

Key Components and Services

Components

1-HeaderComponent:
  Contains the search bar and language toggler.

  Dynamically updates the layout direction (rtl/ltr) based on the selected language.

2-FooterComponent:

Stays pinned at the bottom of the page using a flexible CSS layout.

3-HomeComponent:

Displays the paginated user list.

4-DetailsComponent:

Shows detailed information for a selected user.

Includes a back button for navigation.

Services
ApiService:

Handles HTTP requests to fetch user data.

Implements caching to optimize performance.

SearchService:

Manages the search functionality using BehaviorSubject.

CustomMatPaginatorIntl:

Customizes Angular Material pagination labels based on the selected language.

Usage
Pagination:

Browse users by navigating through the paginated list.

Search:

Enter a user ID in the search bar to find and view detailed information about a user instantly.

Language Toggle:

Click the language button in the header to switch between English and Arabic. The layout direction updates dynamically.

Navigation:

Click on a user's card to view their details. Use the back button to return to the main user list.

Advanced Features
Caching:

The ApiService caches both paginated user data and individual user details to avoid redundant API calls.

Dynamic Direction:

The HeaderComponent updates the dir attribute dynamically based on the selected language.

Custom Pagination:

Pagination labels adapt to the selected language using CustomMatPaginatorIntl.

Observables:

Reactive programming is used throughout the app to handle asynchronous data streams.
