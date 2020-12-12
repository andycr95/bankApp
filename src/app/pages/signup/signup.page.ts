import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
private userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: AuthService, private router: Router) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  createUser(){
    this.userService.createUser(this.userForm.value).subscribe((res:any) => {
      localStorage.setItem('TOKEN', res.token);
      localStorage.setItem('NAME', res.user.name);
      localStorage.setItem('_id', res.user._id);
      this.router.navigate(['/']);
    });
  }


}
