import { SearchClient, mainIndex } from './'

export const getById: GetByIdFetcher = async (id) => {
  const request = {
    index: mainIndex,
    id
  }
  try {
    const result = await SearchClient.get(request)
    const body = result
    return body._source
  } catch (error) {
    if (error.name === 'ResponseError' && error.meta.statusCode === 404) return false
    throw error
  }
}

type GetByIdFetcher = <TData extends { id: string}>(id: string) => Promise<TData>