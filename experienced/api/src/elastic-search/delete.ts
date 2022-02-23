import { SearchClient, mainIndex } from './index'

export const deleteRecord = async (id: string) => {
  const request = {
    index: mainIndex,
    id,
  }
  
  const { body } = await SearchClient.exists(request)
  if (body) return SearchClient.delete(request)
}