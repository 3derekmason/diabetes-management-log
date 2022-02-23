import { Client } from '@elastic/elasticsearch'

export const SearchClient = new Client({ node: 'http://localhost:9200' })

/** For simplicity, all items are in the same index */
export const mainIndex = 'main'

export * from './create'
export * from './getById'
export * from './delete'
