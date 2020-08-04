import knex from 'knex';
import path from 'path';

// migrations - controlam a versão do banco de dados.

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite') //__dirname retorna o diretório onde é executado a função.
    },
    useNullAsDefault: true, //Exclusivo do sqlite, para preencher com NULL os campos não preenchidos.
});

export default db;