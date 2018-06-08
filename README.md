[![License](http://img.shields.io/badge/Licence-MIT-brightgreen.svg)](LICENSE.md)

# Introduction

Currently runs with:

- Angular v6.0.3
- Angular-CLI v6.0.3
- Electron v2.0.1
- Electron Builder v20.13.4


## Getting Started

Install dependencies with npm :

``` bash
npm install
```

There is an issue with `yarn` and `node_modules` that are only used in electron on the backend when the application is built by the packager. Please use `npm` as dependencies manager.


## To build for development

- **in a terminal window** -> npm start  

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |


## Browser mode

Maybe you want to execute the application in the browser (WITHOUT HOT RELOAD ACTUALLY...) ? You can do it with `npm run ng:serve`.  
Note that you can't use Electron or NodeJS native libraries in this case. Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.

## Error with nodejs third party packages

Since Angular 6 does not provide an eject anymore, you can't configure your webpack config file to import node externals.

An issue in [Angular repository](https://github.com/angular/angular-cli/issues/10681) is opened about this feature. 

Please have a look at [Stack Overflow Post workaround](https://stackoverflow.com/questions/50234196/after-updating-from-angular-5-to-6-i-keep-getting-the-error-cant-resolve-timer) that may work in some cases. Or use branch [angular5](https://github.com/maximegris/angular-electron/tree/angular5) and continue to eject your configuration file.
