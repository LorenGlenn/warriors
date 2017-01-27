# Warriors

By Loren Glenn

This site allows users to see who is on the current roster for the Golden State Warriors and allows the admin user to update, delete or add a player.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Database

Create a firebase account, create a new project and then create a file at src/app/api-keys.ts looking like this but with your project credentials:

export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx",
    databaseURL: "xxxx",
    storageBucket: "xxxx",
    messagingSenderId: "xxxx"
  };

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
