### poke-palette

A keyboard-first command palette to quickly select your best pokemon.

**Frontend Task by 2586labs.com**

Pre work:

- https://pokeapi.co/docs/graphql
- https://www.youtube.com/watch?v=vUlnxjuYyzw: A video on keyboard shortcuts
- https://github.com/pacocoursey/cmdk: The famous `cmdk` repo

#### Potential Plan of Action

Steps 

1. Implement Modal Open and Close

`Ctrl + K`: Open Modal
`Esc`: Close Modal

Note: When opening modal, a primary (default) filter is set/selected.

2. Identify Filters

Pokemons
- Generation
  - Gen I
  - Gen II
  - Gen III
- Color
  - Red
  - Green
  - Blue 
- Habitat (Checkbox)
  - Grassland
  - Mountain 
  - Water

Moves
- Move Class
  - Physical
  - Special
  - Status
- Power Points
  - above 10
  - above 15
  - above 20
 
3. Identify Components

- Modal
- Filter Box
  - Name + <?num> + `>`
- Select Filter
  - <radio/check> + Filter Name
- CTA 
  - Show Results (Primary)
  - Reset (Secondary)

4. Figure out GraphQL

- https://www.freecodecamp.org/news/5-ways-to-fetch-data-react-graphql/amp

Use Apollo Client

