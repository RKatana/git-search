import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { User } from '../user'

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {
  userUrl='https://github.com/RKatana?access_token=d3b98b4ec0a789bd55102db2685a440ffe5ba6f0'
  repos=[]
  // newUser:any =new User('User','repoUrl')
  // newRepo =new repoUrl()
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get(this.userUrl).subscribe(data=>{
      // this.repos=this.newUser
      // data['User'].forEach(() => {
      //   return this.newUser
      //   // let repoUrl = element.User.repo_url;
      //   // this.newUser.append(User);
      // console.log(this.newUser)
    })
    // console.log(this.newUser)
  }
}
