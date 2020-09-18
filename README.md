# My charts page

- [My charts page](#my-charts-page)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Test](#test)
    - [Unit tests output](#unit-tests-output)
    - [Coverage report](#coverage-report)
    - [Watch mode](#watch-mode)

## General info
This project is about a web application that display user statistic. Is been created with custom web components.

## Technologies
Project is created with:
* Javascript(ES6)
* Webpack
* SCSS
* D3
* Jest
* Eslint(for development purposes)

## Setup
To run this project, install it locally using yarn:

```
$ yarn install
$ yarn start
```
## Test
I focus mainly on unit testing, try to secure and "break" all my units. Jest is been used with vue-test-utils(Similar to Enzyme) to achieve this. 

### Unit tests output
To run test information run the following command:

```
$ yarn unit
```

### Coverage report
To run test coverage information run the following command:

```
$ yarn unit:watch
```

### Watch mode
To run test on watch mode run the following command:

```
$ yarn unit:coverage
```
