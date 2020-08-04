import Knex from 'knex';

/*Quais alterações serão realizadas no DB.*/
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => { /*Criar a tabela.*/
        table.increments('id').primary();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE') /*Se alterar algo na tabela de usuários, aqui também é atualizado.*/
        .onDelete('CASCADE'); /*Caso o professor seja deletado, suas aulas são deletadas também.*/

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))/*Colocar a data de quando foi criada a conexão.*/
            .notNullable(); /*Quando a conexão foi criada.*/
    });
}

/*Fazer o Backup caso der algum erro.*/
export async function down(knex: Knex) { /*Deletar a tabela.*/
    return knex.schema.dropTable('users');
}