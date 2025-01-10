export const productApi = {
  getCity: ({ page }: { page: number }, { signal }: { signal: AbortSignal }) => {
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product?page=${page}`, {
      signal,
    }).then(response => response.json() as Promise<Product[]>)
  },
}
