exports.up = async function(knex) {
    await knex.schema
      .createTable('projects', table => {
        table.increments("project_id")
        table.string('project_name', 200).notNullable().unique()
        table.string('project_description', 200)
      })
      .createTable('resources', table => {
        table.increments("resource_id")
        table.string(' resource_name', 200).notNullable().unique()
        table.string('resource_description', 200)
      })
      .createTable('tasks', table => {
        table.increments("task_id")
        table.string('task_description', 200).notNullable()
        table.string('task_notes', 200)

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
  