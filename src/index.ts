import { Autor } from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/Libroimpreso";

const Ana =new Autor("Ana","Todd")
const John=new Autor("John","Green")

const libro1= new LibroImpreso("After", Ana)
const libro2=new LibroImpreso("Bajo la misma estrella", John)


const biblioteca =new Biblioteca()
biblioteca.agregarLibro(libro1)
biblioteca.agregarLibro(libro2)

biblioteca.mostrarCatalogo()

