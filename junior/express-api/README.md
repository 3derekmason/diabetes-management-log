# DML Coding Challenge // API

We have provided a starter [Koa](https://koa.com) powered API.

## Usage

- `npm ci`
- `npm run start`

## Highlights

- You can make the data entity whatever you want it to be. Game of Thrones characters, Pokemon, politicians, books, whatever you want to do.
- The routes can be named whatever you think makes sense. Right now they are called `entity`.
  - For example, to get an entity, a request is made to `/entity`. You can rename entity to whatever you wish.
  - This is not part of the grading, so don't feel too much pressure here. Have fun, or just leave it as entity if you don't feel like changing it.
- We have provided some basic functionality to interact with Elastic. If this is useful, feel free to use it. You can also create your own with whatever data store you are most comfortable with.

## Acceptance Criteria

Here is what we are looking for, and how your submission will be graded.

Any reference to `entity` can be replaced with whatever you decide to use, as described above.

### Get an entity

- [ ] A GET request to `/entity` returns the given entity, or a 404 status code if that entity does not exist.

### Delete an entity

- [ ] A DELETE request to `/entity` deletes the given entity, or a 404 status code if that entity does not exist.
- [ ] A 200 status code, with a message of 'ok' or something similar is returned upon successful deletion.

### Search an entity

- [ ] A GET request to `/entities` ( or whatever the plural version of your entity is ) returns a list of entities.

#### Bonus

As a bonus, allow a set of JSON API standard query arguments to be applied on the request to filter, sort, and limit the entities being returned.

- [ ] `page[limit]` :arrow_left: limit the number of entities returned
- [ ] `page[offset]` :arrow_left: jump ahead by `limit` `offset` number of times
  - `limit = 10`, `offset = 2`, return entity 20-30
- [ ] `page[sort]` :arrow_left: attribute to sort by
- [ ] `page[order]` :arrow_left: ascending or descending order
- [ ] `filter[SOMETHING_YOU_WANT_TO_FILTER]`
  - Optional, if you'd like to filter based on some attribute in the entity.

<!-- ## Consistency

This refers to the naming of variables, function calls, etc. Basically looking for there not to be `camelCase` and `snake_case` variables at the same time. Looking for patterns to be predictable, so the reader doesn't need to look really hard to find something.  -->

### Adhering to code style

There is an existing ESLint config / Prettier config. It's really helpful to not have to sort through formatting changes during PR's. It's sometimes confusing to see a large change that isn't actually a code change while reviewing a PR. We use both ESLint and Prettier mainly to stay all on the same page, and to not have to think about formatting in a manual way.

- [ ] ESLint passes
- [ ] Prettier passes

### Types

*_Skip if not using TypeScript_

TypeScript is an important part of our stack, and good types are essential to maintain speed when switching to different parts of the app. 

- [ ] Types are named consistently
- [ ] Types are accurate and appropriate to the scenario
- [ ] Compiler does not output any errors