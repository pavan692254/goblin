import { Component, OnInit,TemplateRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  user: any;
  password: any;
  fromDate: any;

  login() {
    console.log('Hello',this.user);
    
  }
}
