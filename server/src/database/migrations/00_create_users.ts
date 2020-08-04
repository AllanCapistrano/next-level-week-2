import Knex from 'knex';

/*Quais alterações serão realizadas no DB.*/
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => { /*Criar a tabela.*/
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

/*Fazer o Backup caso der algum erro.*/
export async function down(knex: Knex) { /*Deletar a tabela.*/
    return knex.schema.dropTable('users');
}