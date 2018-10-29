import { environment } from "src/environments/environment";

export class User {
  
  constructor(
    public User:any,
    public login:string,
    public html_url:string,
    public followers:number,
    public following:number,
    public public_repos:number,
    public avatar_url:any
    ){
    // this.User='https://api.github.com/users/RKatana?access_token' +environment.apiKey

    this.html_url='https://github.com/RKatana'
  }
}
