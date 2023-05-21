import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Modelos/user/user';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public correo!:string
  public clave!:string
  userSubcription:Subscription=new Subscription
  public encontrado:boolean=false
  public user=new User();
  public users:User[]=[]

  constructor(public userService: UserService,public router:Router, public authService:AuthService) { }

    ngOnInit(){
      this.userSubcription=this.userService.all$().subscribe((item:User[])=>{
       this.users=item
       console.log(this.user)
      })

       this.userService.all().subscribe();

  }

  login(){
    this.users.forEach(element => {
      if(element.email===this.correo && element.password===this.clave){
        this.encontrado=true
        this.authService.login(element.id)
        this.router.navigate(['/home/crearanteproyecto']);
      }
    });
    if(this.encontrado===false){
    }

  }
}
