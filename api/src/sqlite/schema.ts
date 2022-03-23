import { Entry } from '@/interfaces'
import client from 'knex'

import { entries } from './seed'

export const knex = client({
  client: 'sqlite3',
  connection: {
    filename: './mydb.sqlite'
  },
  useNullAsDefault: true
})

export const setupDb = async () => {
  // If the table has already been created, don't try to create gain
  const doesEntityTableExist = await knex.schema.hasTable('entries')
  if (doesEntityTableExist) return

  // Create an SQL table that matches the Entry interface
  await knex.schema.createTable('entries', table => {
    table.increments('id')
    table.string('date')
    table.integer('value')
    table.string('comment')
  })

  // Insert the dummy seed data to have something to start with.
  for (const entry of entries) {
    await knex('entries').insert(entry)
  }
}

declare module 'knex/types/tables' {
  interface Tables {
    entries: Entry
  }
}
