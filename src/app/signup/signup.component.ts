import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }
signInForm = new FormGroup({
  userName:new FormControl('',[Validators.required,Validators.minLength(6)]),
  password:new FormControl('',[Validators.required])
})
onSubmit(){
  console.log(this.signInForm.value)
}
}
