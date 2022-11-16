import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  constructor(private authService: AuthService, private router: Router){ }

  submitForm(){
    if (this.form.invalid){
      return;
    }

    /*this.authService
    .login(this.form.get('username')?.value, this.form.get('password')?.value)
    .subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/start']);
    });*/
  }

  ngOnInit(): void {
  }

}
