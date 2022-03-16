import options from "./options/mysqlconfig.js";
import knex from "knex";

const database = knex(options);

const articulos = [
    {name:"Coca-light",price:240,pImg:"https://pbs.twimg.com/media/EvxeHViXAAEgr3i.jpg"},
    {name:"Monopatin",price:5000,pImg:"https://pbs.twimg.com/media/EvxeHViXAAEgr3i.jpg"},
    {name:"Mate",price:2000,pImg:"https://pbs.twimg.com/media/EvxeHViXAAEgr3i.jpg"},
    {name:"Coca",price:250,pImg:"https://pbs.twimg.com/media/EvxeHViXAAEgr3i.jpg"}, 
]


const processDatabase = async() =>{
    let tableExists = await database.schema.hasTable('articulos');
    if(tableExists){
        await database.schema.dropTable('articulos');
    }
    await database.schema.createTable('articulos',table=>{
        table.increments('id');
        table.string('name',15).nullable(false);
        table.float('price').nullable(false);
        table.string('pImg');
        
    })
    await database('articulos').insert(articulos);
    let results = await database.from('articulos').select('*')
    let articles =  JSON.parse(JSON.stringify(results));
    console.log(articles);
    
}
processDatabase();