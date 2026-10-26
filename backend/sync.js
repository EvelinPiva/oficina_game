// Recria as tabelas com force:true, apagando os dados existentes; utilizar somente para reinicialização intencional.
const {Cliente, Console, Agendamento} = require('./models/rel')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force:true})
        console.log('sincronziando tabelas')
    }catch(err){    
        console.error('erro ao sincronizar',err)
    }finally{
        await conn.close()
        console.log('fechando a conexão')
    }
}

syncDataBase()