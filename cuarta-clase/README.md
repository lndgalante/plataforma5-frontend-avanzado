## Workshop

### Primer parte

- [ ] Mostrar listado de episodios en la vista del personaje /character/:id, y cualquier otra información que sea relevante
- [ ] El listado tiene que ser paginado, y poder pedir episodios por página

  Hint: Usar el argumento page de la query episodes

### Segunda Parte

- [ ] Crear una página para `/episode/:id`, siendo en el file-system `pages/episode/[id].tsx`
- [ ] Al clickear en un episodio en la ruta /character/:id me lleva a la ruta anteriormente generada
- [ ] Pedir con una query toda la información de episodio
- [ ] Mostrar en la UI toda la información del episodio

### Tercer parte

- [ ] Utilizar next-seo para agregar meta tags específico para cada página creada
- [ ] Pedir del lado del servidor las queries para Urql y que el cliente ya llegue con los datos cargados (SSR)
      Links
      https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
      https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
      https://formidable.com/open-source/urql/docs/advanced/server-side-rendering/#using-getstaticprops-or-getserversideprops

## Links

[Rick and Morty | GraphQL Playground](https://rickandmortyapi.com/graphql)
[Next.js | Docs](https://nextjs.org/docs/getting-started)
[Chakra UI | Docs](https://chakra-ui.com/docs)
[Urql | Docs](https://formidable.com/open-source/urql/docs/basics/react-preact/)
