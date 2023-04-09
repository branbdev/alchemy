import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//* The AppComponent class retrieves a list of users from a local API using HttpClient in Angular.
export class AppComponent implements OnInit {
  title = 'Let The Chemistry Unfold';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      /*
       *`next`, `error`, and `complete` are callbacks that are passed to the `subscribe` method of the
       *`HttpClient` instance.
       */
      next: (response) => (this.users = response),
      error: (error) => console.log(error),
      complete: () => console.log('Request has completed'),
    });
  }
}
