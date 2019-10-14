import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  public loginCred: any;

  constructor(private fb: FormBuilder, private router:Router, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
    this.loginCred= {
      username: 'level',
      password: 'Access123'
    };
    this.loginForm = this.fb.group({
      'username' : [null],
      'password' : [null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$')]
      ]});
  }

  loginFormSubmit(){
    if(this.loginForm.valid){
      if(this.loginForm.value.username === this.loginCred['username'] && this.loginForm.value.password ===  this.loginCred['password']){
        this.router.navigate(['afterLogin']);
      } else {
        this.flashMessage.show('Username/ Password Combination was not recognised.', {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    } else {
      if(this.loginForm.controls.password.invalid){
        if(this.loginForm.controls.password.errors.pattern){
          this.flashMessage.show('Password must include one capital letter, one lowercase letter, and atleast one number', {
            cssClass: 'alert-danger',
            timeout: 5000});
        } else {
          this.flashMessage.show('Password is required.', {
            cssClass: 'alert-danger',
            timeout: 5000});
        }
      } else {
        this.flashMessage.show('Please correct the error', {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    }
  }


}
