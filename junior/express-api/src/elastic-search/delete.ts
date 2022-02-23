import { SearchClient, mainIndex } from './index'

export const deleteRecord = async (id: string) => {
  const request = {
    index: mainIndex,
    id
  }

  const doesExist = await SearchClient.exists(request)
  if (doesExist) return SearchClient.delete(request)
}
