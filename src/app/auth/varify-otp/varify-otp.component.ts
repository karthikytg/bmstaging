import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-varify-otp',
  templateUrl: './varify-otp.component.html',
  styleUrls: ['./varify-otp.component.scss']
})
export class VarifyOtpComponent implements OnInit {

  public otpEntered = '0';
  public config = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '90px',
      'height': '102px',
      'background': 'transparent',
      'border': '1px solid #000000',
      'border-radius': '16px',
      'outline': 'none'
    }
  };
  public showResend = false;
  public resendOtpIn = '3:00';
  public isEnabled = false;
  public timer: any;
  public a: any;
  public btnLabel = '';
  constructor(private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
     private hService: HomeService) { }


  ngOnInit(): void {
    this.hService.makeYellow();
    this.initTimer(18000);
    this.a = this.activatedRoute.snapshot.params['a'];
    this.btnLabel = 'CREATE ACCOUNT';
    if (this.a === '1') {
      this.btnLabel = 'LOGIN TO ACCOUNT';
    }
  }
  private initTimer(remainingTime: number) {
    this.timer = setInterval(() => {
      if (remainingTime <= 0) {
        this.showResend = true;
        this.resendOtpIn = '0:00';
        clearInterval(this.timer);
      } else {
        remainingTime -= 1000;
        this.resendOtpIn = this.miliSecToMin(remainingTime);
      }
    }, 1000);
  }
  onOtpChange(event: any) {
    this.otpEntered = event;
  }
  verifyOtp(event: any) {
    console.log('form : ', localStorage.getItem('userForm'));
    if (this.a === '1') {
      this.router.navigate(['/my-acc']);
    } else {
      const data = JSON.parse(localStorage.getItem('userForm') || '');
      this.authService.signUpUser(data).subscribe(res => {
        // alert(res.message);
        this.router.navigate(['/my-acc']);    
      }, err => {
        console.log('Error : ', err.message)
      });
    }
  }
  resendOtp() {

  }
  miliSecToMin(millis: number) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000);
    return (seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
  }
}
