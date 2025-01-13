export const categoryApi = {
  getAllCategories: ({ signal }: { signal: AbortSignal }) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, {
      method: 'GET',
      signal,
    }).then(response => response.json() as Promise<IBaseCategory[]>)
  },
}
