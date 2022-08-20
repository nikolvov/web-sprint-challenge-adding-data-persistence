exports.up = async function(knex) {
    await knex.schema
      .createTable('projects', table => {
          table.increments()
      })
      .createTable('resources', table => {
          table.increments()
      })
      .createTable('tasks', table => {
          table.increments()
      })
      .createTable('project_resources', table => {
          table.increments()
      })
  };
  
  exports.down = async function(knex) {
    await knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('project_resources')
  };
  