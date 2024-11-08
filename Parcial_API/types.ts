import { ObjectId, OptionalId } from "mongodb";

export type LibroModel = OptionalId < {
    titulo: string;
    autores: ObjectId[];
    copiasDisp: number;
}>;

export type AutorModel = OptionalId < {
    nombre: string;
    biografia: string;
}>;

export type Libro = {
    titulo: string;
    autores: Autor[];
    copiasDisp: number;
};

export type Autor = {
    nombre: string;
    biografia: string;
};