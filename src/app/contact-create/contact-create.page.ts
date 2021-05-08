import {Component, OnInit} from '@angular/core'
import { NgForm } from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector : 'contact-create.page',
  templateUrl: './contact-create.page.html',
  styleUrls:['./contact-create.page.css']
})
export class ContactCreatePage  implements OnInit{
  constructor(private readonly router: Router ) {
  }
  onSubmit(createForm: NgForm): void {

    //store user after submation
  localStorage.setItem('username',createForm.value.name)

  }
ngOnInit(): void {
  if (localStorage.getItem('username') !== null||"") {
         this.router.navigate(['pokemon']);
  }
  else {
    this.router.navigate(['pokemon']);
  }
  }

}

