const express = require('express');


const app =  express();


 app.use(express.json())


/**
 * Roda path para o servidor.
 */
app.get('/courses', (request, response)=>{
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
});

app.post("/courses", (request, response) =>{
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
});

app.put("/courses/:id",(request, response)=>{
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
});

app.patch("/courses/:id", (request, response)=>{
    return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
});

app.delete("/courses/:id", (request, response)=>{
    return response.json(["Curso 6", "Curso 2", "Curso 4"])
})
/**
 * Inicializa o serviço, aqui você pode especificar a porta de acesso do servidor
 */
app.listen(3333)

/**
 *   ##Tipos de parêmetros
 *
 *   Route Params => Identificar um recurso editar/deletar/buscar
 *   Query Params => Paginação e filtro, Usamos somente em rotas do tipo GET
 *   Bady Params => Os Objetos inserção/alteração
 */