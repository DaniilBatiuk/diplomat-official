export const orderApi = {
  getCitiesNovaPoshta: ({ signal }: { signal: AbortSignal }, { city }: { city: string }) => {
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
  getDepartmentsNovaPoshta: (
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
  getCitiesUkrPoshta: ({ signal }: { signal: AbortSignal }, { city }: { city: string }) => {
    return fetch(
      `${process.env.NEXT_PUBLIC_UKR_POSHTA_URL}/cities?language=ua&region_id&city_name=${city}&sort_by=entry_index&all_langs_search=true&country=UA&providers=ukrposhta`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      },
    ).then(response => response.json() as Promise<UkrPoshtaCity>)
  },
  getDepartmentsUkrPoshta: (
    { signal }: { signal: AbortSignal },
    { city_doc_id }: { city_doc_id: string },
  ) => {
    return fetch(
      `${process.env.NEXT_PUBLIC_UKR_POSHTA_URL}/warehouses?city_doc_id=${city_doc_id}&language=ua&providers=ukrposhta&receive=true&country=UA`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      },
    ).then(response => response.json() as Promise<UkrPoshtaDepartment>)
  },
}
