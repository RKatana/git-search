import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  Repos:any=[]
  constructor(private http:HttpClient) { 
   this.http.get<repo>('https://api.github.com/users/RKatana/repos').subscribe(data=>{
    let Repo =new Repos(data.name,data.description,data.html_url)
    
    
     this.Repos.forEach(element=>{
      this.Repos.push(Repo)
      
      //  return this.Repos
     })
    //  return this.Repos.name
     console.log(Repos)
   })
   interface repo {
     name,
     description,
     html_url,
     full_name

   }
  }

  ngOnInit() {
  }

}
