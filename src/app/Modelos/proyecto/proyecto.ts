export class Proyecto {
    public id!:number
    public iduser!:number
    public titulo!:string
    public co_titulo!:string[]
    public descripcion!:string
    public co_descri!:string[]
    public objetivo!:string
    public co_objetivo!:string[]
    public hipotesis!:string
    public co_hipotesis!:string[]
    public planteamiento!:string
    public co_planteamiento!:string[]
    public justificacion!:string
    public co_justi!:string[]
    public estadotitulo!:string
    public estadobjetivo!:string
    public estadodescripcion!:string
    public estadohipotesis!:string
    public estadoplateamiento!:string
    public estadojustificacion!:string
    public estado!:string
    setvalues(item:any){
        this.id=item.id
        this.iduser=item.iduser
        this.titulo=item.titulo
        this.co_titulo=item.co_titulo
        this.descripcion=item.descripcion
        this.co_descri=item.co_descri
        this.objetivo=item.objetivo
        this.co_objetivo=item.co_objetivo
        this.hipotesis=item.hipotesis
        this.co_hipotesis=item.co_hipotesis
        this.planteamiento=item.planteamiento
        this.co_planteamiento=item.co_planteamiento
        this.justificacion=item.justificacion
        this.co_justi=item.co_justi
        this.estadotitulo=item.estadotitulo
        this.estadodescripcion=item.estadodescripcion
        this.estadohipotesis=item.estadohipotesis
        this.estadoplateamiento=item.estadoplateamiento
        this.estadojustificacion=item.estadojustificacion
        this.estadobjetivo=item.estadobjetivo
        this.estado=item.estado
    }
}
