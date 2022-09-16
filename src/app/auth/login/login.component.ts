import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public hide = true;
  public errMessage = ''
  constructor(private hService: HomeService, 
    private authSer: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }
    // routerLink="/verify-otp/1"
  ngOnInit(): void {
    this.hService.makeYellow();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    if (this.loginForm.valid) {
      this.authSer.login(this.loginForm.value).subscribe(res => {
        if (res.message) {
          this.router.navigate(['/verify-otp/1']);
        } else {
          this.errMessage = 'Invalid username or password !';
        }
      }, err => {
        this.errMessage = 'Invalid username or password !';
      })
    }
  }
}
