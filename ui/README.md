# DML Coding Challenge // UI

Starter UI powered by React, and TypeScript

## Highlights

- You **do not** have to use TypeScript. The initial template uses TypeScript, however you may write the entire submission in JavaScript. TypeScript is encouraged, but is not required.
- You can use whatever library you like, but be prepared to justify your choice. This includes functionality libraries, as well as component libraries such as MUI or Mantine.
- You will not be judged on style / "prettiness" of the app. We aren't designers, and don't pretend you should be either. If you like to make things look nice, by all means, please do. However it won't be held against you if it looks basic. This allows you to focus on the code rather than the looks.
  - We'd like to see a usable UX. It should be easy to figure out how to do things within the app, it just doesn't need to be visually appealing.

## Usage

- `npm ci`
- `npm run start`

## Acceptance Criteria

Here is what we are looking for, and how your submission will be graded.

### Landing page shows list of all entities

- [ ] Going to the homepage `/` will provide a list of all the entities.
  - This can be displayed however you wish, for example a table. Whatever you think is appropriate.

#### Bonus

- [ ] Provide a way to add the filters mentioned [here](../api/README.md#search-an-entity).
- [ ] If the user has loaded this page once, an additional network call is not made if the user navigates back to this page
  - If something has changed, another network call may be necessary. This refers to a user going to a detailed view, then coming immediately back to the list page. If nothing has changed, do not make another network call.
- [ ] Provide a way to sort the information based on the various data fields

### Detailed view of an entity

<!-- Change to no need for Router - be ambiguous -->

- [ ] Clicking on an entity in the list navigates to a more detailed view of that specific entity.
- [ ] This page should show all the attributes of the entity. 
- [ ] **There needs to be at least one extra attribute shown on this page that is not shown on the list page.**
- [ ] Pasting a URL into the browser with the ID of the entity should show the entity detailed view.
  - For example, localhost:3000/123 would show the details for item `123`. You can make this URL whatever you wish, as long as pasting the URL into a new tab or window loads the correct page.
- [ ] If the provided ID does not exist, a message should be shown saying as much, with an option to go back to the main list page.
- [ ] Provide a way to get back to the list page without using the browser controls.

### Deleting an entity

<!-- User sees list after delete -->

- [ ] Provide the ability to delete an entity.
- [ ] After deleting an entity, the user is taken to the home, list page, with an updated list reflecting the changes ( the deleted entity **is not** in the list ).

### Creating a new entity

- [ ] On the list page, provide a way for the user to create a new entity.
- [ ] After creating an entity, the user is taken to the home, list page, with an updated list reflecting the changes ( the created entity **is** in the list ).

#### Bonus

- [ ] Validate the inputs on the front end before sending the request.
 