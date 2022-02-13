import { SearchClient, mainIndex } from './index'

export const createItem = <TData extends { id: string }>(body: TData) => {
  return SearchClient.create<TData>({
    index: mainIndex,
    body,
    id: body.id,
  })
}
