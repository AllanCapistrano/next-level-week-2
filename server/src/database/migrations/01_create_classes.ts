import Knex from 'knex';

/*Quais alterações serão realizadas no DB.*/
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => { /*Criar a tabela.*/
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') /*Se alterar algo na tabela de usuários, aqui também é atualizado.*/
            .onDelete('CASCADE'); /*Caso o professor seja deletado, suas aulas são deletadas também.*/
    });
}

/*Fazer o Backup caso der algum erro.*/
export async function down(knex: Knex) { /*Deletar a tabela.*/
    return knex.schema.dropTable('classes');
}