import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  public Name() {
   return localStorage.getItem('username');
  }

  onSubmit(): void {
     localStorage.clear()
     this.router.navigate(['create']);

  }

  ngOnInit(): void {
  }

}
