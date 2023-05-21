import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Modelos/user/user';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent {

  usersSubcription:Subscription=new Subscription
  public user=new User();

  constructor(
    public userService: UserService
    )
   { }


   Onsave(){
    if(this.user.email!=""&&this.user.nombre!=""&&this.user.password!=""){

    console.log(this.user)
    this.userService.create(this.user).subscribe()
    }else{
      alert("verifiaca los campos del registro")
    }
   }
}
