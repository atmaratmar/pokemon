
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-landing-page",
  templateUrl: './Landing.page.html',
  styleUrls: ['./Landing.page.css',]
})
export class LandingPage {
  onSubmit(createForm: NgForm): void {

    //localStorage.setItem('User', JSON.stringify(createForm.value))
    localStorage.setItem("usernames", "agent1");


  }
}
