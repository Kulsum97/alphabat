import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url = "./assets/myimage.jpg";
  loginForm = new FormGroup({
    user : new FormControl('' , [Validators.required,Validators.email]),
    password : new FormControl ('' ,[Validators.required,Validators.minLength(5)])
  })
}
