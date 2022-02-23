import { Entity } from '@/interfaces'
import client from 'knex'

import { entities } from './seed'

export const knex = client({
  client: 'sqlite3',
  connection: {
    filename: './mydb.sqlite'
  },
  useNullAsDefault: true
})

/**
 * Creates the in memory SQLite DB. This is setup for your convenience, feel free to use whatever data storage method you wish.
 * You don't need to worry about this, if you are not changing anything about entity
 */
export const setupDb = async () => {
  // If the table has already been created, don't try to create gain
  const doesEntityTableExist = await knex.schema.hasTable('entity')
  if (doesEntityTableExist) return

  // Create an SQL table that matches the Entity interface. This can be adjusted to fit your needs
  await knex.schema.createTable('entity', table => {
    table.increments('id')
    table.string('name')
    table.integer('age')
  })

  // Insert the dummy seed data to have something to start with. This can also be adjusted to fit your needs
  for (const entity of entities) {
    await knex('entities').insert(entity)
  }
}

declare module 'knex/types/tables' {
  interface Tables {
    entity: Entity
  }
}
