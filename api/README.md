# DML Coding Challenge // API

We have provided a starter [Express](https://expressjs.com/) powered API, using TypeScript.

## Usage

- `npm ci`
- `npm run dev`

Using `npm run start` with start the server, but will not restart the server when changed are made

## Highlights

- You **DO NOT** need to complete this in TypeScript. Everything is setup properly so you can start using JS if you'd prefer.
  - TypeScript is encouraged, but not required.
- You can make the data entity whatever you want it to be. Game of Thrones characters, Pokemon, politicians, books, whatever you want to do.
- The routes can be named whatever you think makes sense. Right now they are called `entity`.
  - For example, to get an entity, a request is made to `/entity`. You can rename entity to whatever you wish.
  - This is not part of the grading, so don't feel too much pressure here. Have fun, or just leave it as entity if you don't feel like changing it.

## Database

We have provided a ready-to-go [SQLite](https://www.sqlite.org/index.html) database, using [Knex](https://knexjs.org/). These are just like SQL, and will work right out the box. If you do not wish to use these, that is perfectly acceptable. We have provided them as a means to save time configuring a data store. 

If you prefer to use Mongo, ElasticSearch, etc, **please feel free to do so. It is NOT REQUIRED that you use what we have provided**. Use whatever you're most comfortable with.

If you decide to use something else, please provide a quick set of instructions for how to run the tool you have chosen.

## Acceptance Criteria

Here is what we are looking for, and how your submission will be graded.

Any reference to `entity` can be replaced with whatever you decide to use, as described above.

You may also change the URL path to fit whatever meets your needs. We just want them to make sense. Making a request to `/ba-lalala-bamba`, would be what we are not looking for. Great tune, though.

### Get an entity

- [ ] A GET request to `/entity/:id` returns the given entity, or a 404 status code if that entity does not exist.

### Creating an Entity

- [ ] A POST request to `/entity` creates a new entity

#### Bonus

- [ ] Add some sort of validation with [Joi](https://joi.dev/), or a tool of your choosing to ensure that the request payload adheres to your schema expectations.
- [ ] Send a proper rejection if the validation fails.

### Delete an entity

- [ ] A DELETE request to `/entity/:id` deletes the given entity, or a 404 status code if that entity does not exist.
- [ ] A 200 status code, with a message of 'ok' or something similar is returned upon successful deletion.

### Search an entity

- [ ] A GET request to `/entity` ( or whatever the plural version of your entity is ) returns a list of entities.

#### Bonus


As a bonus, allow a set of JSON API standard query arguments to be applied on the request to filter, sort, and limit the entities being returned.

- [ ] `page[limit]` :arrow_left: limit the number of entities returned
- [ ] `page[offset]` :arrow_left: jump ahead by `limit` `offset` number of times
  - `limit = 10`, `offset = 20`, return entity 20-30
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