export class User {
  public id!:number
  public nombre!:string
  public email!:string
  public password!:string
  setvalores(item:User){
    this.id=item.id
    this.nombre=item.nombre
    this.email=item.email
    this.password=item.password
  }
}
