<div align="center"><img src="https://assets.dmnktoe.de/outlet/images/svg/logo/outlet-label_logo.svg" width="140"></div>

# Outlet

<p>
<img src="https://img.shields.io/github/package-json/v/dmnktoe/outlet.svg">
<img src="https://david-dm.org/dmnktoe/outlet/status.svg">
</p>

Radio Rasclat is a non-commercial internet radio station which is going to stream your music to the web, again! It offers you a platform to play & try out. It serves as a place for the exchange, dialogue and cooperation of music. Founded and curated in 2019, the radio returns to the new venue at KMMN 3. Submit your music via e-mail ([office@radio-rasclat.com](mailto:office@radio-rasclat.com)) to get your own show slot or appearance. Or just listen live on [radio-rasclat.com](https://radio-rasclat.com/).

### Buy our releases

On Bandcamp.

## Development

### Branches

<!-- prettier-ignore -->
| Branch    | Tests | Code Coverage | Codefactor | Comments                 |
| --------- | ----- | ------------- | ---------- | ------------------------ |
| `develop` | <img src="https://travis-ci.com/dmnktoe/outlet.svg?branch=develop"> | [![codecov](https://codecov.io/gh/dmnktoe/outlet/branch/develop/graph/badge.svg)](https://codecov.io/gh/dmnktoe/radio-rasclat-server) | [![CodeFactor](https://www.codefactor.io/repository/github/dmnktoe/outlet/badge/develop)](https://www.codefactor.io/repository/github/dmnktoe/outlet/overview/develop) | Work in progress |
| `master`  | <img src="https://travis-ci.com/dmnktoe/outlet.svg?branch=master"> | [![codecov](https://codecov.io/gh/dmnktoe/outlet/branch/master/graph/badge.svg)](https://codecov.io/gh/dmnktoe/radio-rasclat-server) | [![CodeFactor](https://www.codefactor.io/repository/github/dmnktoe/outlet/badge/develop)](https://www.codefactor.io/repository/github/dmnktoe/outlet/overview/master) | Latest Production Release |

### Getting Started

1. Go to project folder and install dependencies:

```bash
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```bash
npm start
```

### Main Tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                         | Description                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------- |
| npm start                     | Run development server on `http://localhost:4200/`                              |
| npm run build [-- --env=prod] | Lint code and build app for production in `dist/` folder                        |
| npm test                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode        |
| npm run test:ci               | Lint code and run unit tests once for continuous integration                    |
| npm run e2e                   | Run e2e tests using [Protractor](http://www.protractortest.org)                 |
| npm run lint                  | Lint code                                                                       |
| npm run translations:extract  | Extract strings from code and templates to `src/app/translations/template.json` |
| npm run docs                  | Display project documentation                                                   |

When building the application, you can specify the target environment using the additional flag `--env <name>` (do not
forget to prepend `--` to pass arguments to npm scripts).

The default build environment is `prod`.

### Starting the Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

### Code Scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Licences

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdmnktoe%2Foutlet.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdmnktoe%2Foutlet?ref=badge_large)
