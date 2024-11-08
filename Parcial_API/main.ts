import { MongoClient } from 'mongodb';
import { Libro, Autor, LibroModel, AutorModel } from "./types.ts";


const MONGO_URL = Deno.env.get("MONGO_URL");

if(!MONGO_URL){
  console.error("url is not set");
  Deno.exit(1);
}

const client = new MongoClient(MONGO_URL);

const dbName = 'biblioteca';

await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collectionLibros = db.collection('libros');
  const collectionAutores = db.collection('autores');


  const handler = async (req:Request) : Promise<Response> => {

    const method = req.method;
    const url = new URL(req.url);
    const path = url.pathname;

    if(method === "GET"){
      if(path === "/libros"){

      }
    }else if(method === "POST"){
      if(path === "/libro"){
        const libro = await req.json();
        if(!libro.titulo || !libro.autores || !libro.copiasDisp){
          return new Response("Bad Request", {status:400});
        }


        
      }

      if(path === "/autor"){
        const autor = await req.json();
        if(!autor.nombre || !autor.biografia){
          return new Response("Bad Request", {status:400});
        }

        
      }


    }else if(method === "PUT"){
      if(path === "/libro"){
        const libro = await req.json();
        if(!libro.titulo || !libro.autores || !libro.copiasDisp){
          return new Response("Bad Request", {status:400});
        }
      }

    }else if(method === "DELETE"){
      if(path === "/libro"){

      }
    }

    return new Response("endpoint not found", {status:404});
  }


  Deno.serve({port:3000},handler);

