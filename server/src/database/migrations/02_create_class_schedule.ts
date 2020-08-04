import Knex from 'knex';

/*Quais alterações serão realizadas no DB.*/
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => { /*Criar a tabela.*/
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE') /*Se alterar algo na tabela de usuários, aqui também é atualizado.*/
        .onDelete('CASCADE'); /*Caso o professor seja deletado, suas aulas são deletadas também.*/
    });
}

/*Fazer o Backup caso der algum erro.*/
export async function down(knex: Knex) { /*Deletar a tabela.*/
    return knex.schema.dropTable('class_schedule');
}