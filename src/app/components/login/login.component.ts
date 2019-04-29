import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  info:any={};
  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit() {

  }
  loginUser(e){
   this.info.username = e.target.elements[0].value;
   this.info.password = e.target.elements[1].value;
    //console.log(username,password);
    e.preventDefault();
    console.log(e);
    
    this.loginService.getUserLogin(this.info).subscribe(res => {

     // this.info = res["data"];
      console.log("user", res);
      this.router.navigate(['home']);

  });
  
    
    }

}
