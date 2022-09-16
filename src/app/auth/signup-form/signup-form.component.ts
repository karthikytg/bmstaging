import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signUpForm!: FormGroup;
  public hide = true;
  
  constructor(private hService: HomeService, 
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.hService.makeYellow();
    this.signUpForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      
    });
  }
  enterOTP() {
    if (this.signUpForm.valid) {
      console.log('Val : ', this.signUpForm.value);
      localStorage.setItem('userForm', JSON.stringify(this.signUpForm.value));
      this.router.navigate(['/verify-otp/2']);
      // this.authService.signUpUser(this.signUpForm.value).subscribe(res => {
      //   alert(res.message);
      //   
      // })       
    }
  }
}
