TODO:

npm install --save redux-devtools-extension

## How to contribute

- TODO is in [Trello]
- [Indiefilms codesandbox]

## Styleguide

- [AirBNB React]
- [Code structure]

## File Structure


- Server with API via Express
- React frontend

General for each component

- src
  - Components

    - Adapters
      - Material components
    - DemoComponent

      - DemoComponent.js            - render only
      - DemoComponentContainer.js   - all logic
      - DemoComponentNative.js
      - DemoComponentTV.js          - most basic

      Redux
      - DemoComponentActions.js
      - DemoComponentReducers.js    - Logic here, not in reducers. For using Redux Devtools time-travel
      - DemoComponentTest.js
      - ? Sagas?

      vs       ReactContext vs           - Not Native yet

      - DemoComponent.scss
      - DemoComponent.css


      Unknowns
      - ? for PWA
      - ? Router
      - CMS
      - For Electron


- Pages - TODO: move


## Useful links:

[Code structure]: http://redux.js.org/docs/faq/CodeStructure.html#code-structure
[Youtube API]: https://developers.google.com/youtube/iframe_api_reference#Events
[AirBNB React]: https://github.com/airbnb/javascript/tree/master/react
[Trello]: https://trello.com/b/zBZ4bI1W/indiefilm-project-on-codebuddies
[Indiefilms codesandbox]: https://codesandbox.io/s/zkyr2l50jx
