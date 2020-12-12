import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: AuthService, private router: Router) {
    this.userForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  login(){
    this.userService.login(this.userForm.value).subscribe((res:any) => {
      localStorage.setItem('TOKEN', res.token);
      localStorage.setItem('NAME', res.user.name);
      localStorage.setItem('_id', res.user._id);
      this.router.navigate(['/']);
    });
  }

}
