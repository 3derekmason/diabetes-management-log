import { SearchClient, mainIndex } from '.'

export const getById = async <TData extends { id: string }>(id: string): Promise<TData | undefined> => {
  const request = {
    index: mainIndex,
    id
  }
  try {
    const result = await SearchClient.get<TData>(request)

    if (result._source) return result._source
  } catch (error) {
    const typedError = error as TypedError
    console.log('typed error', typedError)
    if (typedError.name === 'ResponseError' && typedError.meta.statusCode === 404) return undefined
    throw error
  }
}

interface TypedError {
  name: string
  meta: {
    statusCode: number
  }
}
