import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  User:any;

  constructor(private http:HttpClient,) { }
  
  ngOnInit() {
    interface userInfo{
      User:any,
      login:string,
      html_url:string,
      followers:number,
      following:number,
      public_repos:number,
      avatar_url:any
      }

    
    this.http.get<userInfo>('https://api.github.com/users/RKatana?' + environment.apiKey ).subscribe(data=>{ 
      this.User=new User(data.User,data.login,data.html_url,data.followers,data.following,data.public_repos, data.avatar_url)
    })
    
  }
  search(event){
    let user =new User ('','','',0,0,0,0)
    return this.User
  }

}
