import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  User:User;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface userInfo{
      User:any,
      login:string,
      html_url:string,
      followers:number,
      following:number,
      public_repos:number
      }

    
    this.http.get<userInfo>('https://api.github.com/users/RKatana?access_token=d3b98b4ec0a789bd55102db2685a440ffe5ba6f0').subscribe(data=>{ 
      this.User=new User(data.User,data.login,data.html_url,data.followers,data.following,data.public_repos)
    })
    
  }

}
