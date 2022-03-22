export class Noticia {

    constructor(
        public idNoticias:number,
        public titulo: string,
        public categoria: string,
        public prioridad: string,
        public fecha_publicacion: string,
        public titular: string,
        public descripcion: string,
        public imagen: string,
        public id_Protectora: number){}
}
