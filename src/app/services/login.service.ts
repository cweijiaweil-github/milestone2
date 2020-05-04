import { Injectable } from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  
  private headers: Headers;
  constructor(private http: HttpClient,public router: Router) { }

  getInfo(): string {
    return 'test service';
  }
  
  onLogin(user:any) {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    this.http.post("/api/user/login",user,httpOptions).subscribe( val => {
      // console.log("post请求成功", val);
      this.router.navigateByUrl("home/"+val["user_type"]);
    },
    error => {
      // console.log("post请求失败", error);
      this.router.navigateByUrl("errPage");
    }
    );
  }
  
}
