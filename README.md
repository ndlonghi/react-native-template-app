#React Native Template App

This is a template for a React Native app using Redux, Redux Persist and React Navigation. There is an example
implementation of a login screen with navigation to a main screen.

### Project general structure
General structure as created by `react-native init`:
```
/project-name               : Project root
  /android                  : Generated directory with android build and custom native code. Signing certificates, icons,
                              splash go here.
  /ios                      : Generated directory with ios build and custom native code. Signing certificates, icons,
                              splash go here.
  /node_modules             : External modules.
  /src                      : Source root. The app goes here.
  /App.js                   : App main file: Store, persistance and root navigator initialization.
  /app.json                 : App info.
  /index.js                 : App registration.
  /package.json             : Project dependencies.
```

Project structure `src`:
```
/src                        : Root
  /assets                   : Static assets
    /fonts                  : Custom fonts
    /icons                  : Custom icons
    /imgs                   : Images
  /components               : Components that do not contain their own state
  /containers               : Containers (components with state). Usually used as parts of a screen
  /environments             : Project configuration. For example: backend url
  /models                   : Classes, interfaces, etc.
  /navigation               : App navigation
    /actions                : Navigation actions. This is required for redux integration
    /containers             : Navigators logic
    /navigators             : Navigators declaration
    /reducers               : Navigators reducers. Required for redux integration
    /screen_names.js        : Screens and navigators names
  /reducers                 : Main reducer
  /screens                  : Screens. They are usually composed of one or more components and containers. They contain
                              their own state
  /services                 : Services. For example auth, api, etc.
  /store.js                 : Store y persistor
```
