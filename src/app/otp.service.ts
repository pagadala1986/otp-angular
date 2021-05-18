import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor() { }
  otpSubmitService(data){
    console.log('OTP Data');
    console.log(data);
  }
}
