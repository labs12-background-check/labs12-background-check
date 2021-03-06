
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('googleid').notNullable();
        tbl.string('name').notNullable();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
        tbl.string('usertype').notNullable();
        tbl.string('email').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
