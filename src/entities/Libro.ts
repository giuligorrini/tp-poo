import { Autor } from "./Autor";


export interface Libro{
    autor:Autor;
    titulo:string;
    obtenerResumen():string;
}
