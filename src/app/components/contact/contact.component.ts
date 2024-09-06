import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get subject(){
    return this.contactForm.get('subject');
  }

  get content(){
    return this.contactForm.get('content');
  }

  send() {
    let value = this.contactForm.value;
    console.log(value);

    this.contactForm.reset();
  }
}
