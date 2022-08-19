exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.varchar('project_name').NotNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
