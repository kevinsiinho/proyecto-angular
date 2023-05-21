import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { User } from 'src/app/Modelos/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 //solo comunica es decir actualiza los cambios si los hay
 public user$ = new Subject<User>(); //para uno solo
 public users$ = new Subject<User[]>; //para varios
 //estos si guardan
 public user= new User();
 public users: User[]=[];


 public url=environment.url
 constructor(
   private http:HttpClient
 ) { }

 all$():Observable<User[]>{
   return this.users$.asObservable();
 }

 get$():Observable<User>{
   return this.user$.asObservable();
 }
 //funcion que permite llamar al servidor y pasarle unos parametros

 all():Observable<any>{
   this.users=[]
   return this.http.get<User>(this.url+"user")
   .pipe(
     map((res:any)=>{
       res.forEach((item:any) => {
         this.user=new User()
         this.user.setvalores(item)
         this.users.push(this.user)
       });
       this.users$.next(this.users)
     }),
     catchError((err)=>of(err))
    )

 }

 get(id:number):Observable<any>{
   this.user=new User
   console.log(this.url+"user/"+id)
   return this.http.get<User>(this.url+"user/"+id)
   .pipe(
     map((res:any)=>{
         this.user=new User()
         this.user.setvalores(res)
         this.user$.next(this.user)

     }),
     catchError((err)=>of(err))
    )

 }

 create(user:User){
   return this.http.post<User>(this.url+"user",user)
  .pipe(
     map((res:any)=>{
       if(res.status==200){
         this.user=new User()
         this.user.setvalores(res.data)
         this.user$.next(this.user)
       }
     }),
     catchError((err)=>of(err))
    )

 }
}
