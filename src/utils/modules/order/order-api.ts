export const orderApi = {
  getCities: ({ signal }: { signal: AbortSignal }, { city }: { city: string }) => {
    return fetch(`${process.env.NEXT_PUBLIC_NOVA_POSHTA_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal,
      body: JSON.stringify({
        apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA,
        modelName: 'AddressGeneral',
        calledMethod: 'searchSettlements',
        methodProperties: {
          CityName: city,
          Limit: '100',
          Page: '1',
        },
      }),
    }).then(response => response.json() as Promise<NovaPoshtaCity>)
  },
  getDepartments: (
    { signal }: { signal: AbortSignal },
    { cityRef }: { cityRef: string },
    { findByString }: { findByString: string },
  ) => {
    return fetch(`${process.env.NEXT_PUBLIC_NOVA_POSHTA_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal,
      body: JSON.stringify({
        apiKey: process.env.NEXT_PUBLIC_NOVA_POSHTA,
        modelName: 'AddressGeneral',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef: cityRef,
          FindByString: findByString,
          Limit: '100',
          Page: '1',
        },
      }),
    }).then(response => response.json() as Promise<NovaPoshtaDepartment>)
  },
}
