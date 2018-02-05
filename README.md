# Facet-Filtering

This is a simple example Angular application written with Angular5. It does
simple filtering of cars.

![gif of project](screen-sample.gif?raw=title "Facet-Filtering")

Install and run
---

```
npm install
npm start
```
Open your browser to http://localhost:4200/

Run unit tests
---
```
npm run test
```

![gif of project](test-screen.png?raw=title "Unit-test")

Angular Code highlights
* [app.component.ts](https://github.com/FrankHassanabad/facet-filtering/blob/master/src/app/app.component.ts#L36) - Main Component

Plain TS/JS code highlights
* [filters.ts](https://github.com/FrankHassanabad/facet-filtering/blob/master/src/app/filters.ts#L19) - Filter functions 
* [aggregate.ts](https://github.com/FrankHassanabad/facet-filtering/blob/master/src/app/aggregate.ts#L17) - Aggregate functions
* [transforms.ts](https://github.com/FrankHassanabad/facet-filtering/blob/master/src/app/transforms.ts#L28) - Data Transform functions

Unit test code highlights
* [filters.spec.ts](https://github.com/FrankHassanabad/facet-filtering/blob/master/src/app/filters.spec.ts#L151) - Edge cases for filters

Accomplished:
* Angular2+ (Angular5)
* Broken down components for each part of the UI
* TypeScript in most areas. Very few `any`
* Wrote most of the code in pure functions and kept Angular touch points small
* Jasime Unit tests
* Card based layout
* Filters work as a `OR` filter
* Wrote aggregate functions which take parameters for buckets

TODO:
* Implement mock-cars as a AngularService
* Animations of cards
* Style the checkbox
* Use -1 for filters
* Align left the numbers in the category section
* Truncate the title with ellipse when too and give a tool tip
* Use pipe for title case formatting and pipe for numerical data
* Use cypress.io for e2e testing
* Use more semantic HTML such as `<section>` where appropriate
* Remove use of float for just angular flex-box.
* JSDocs for the source
* Pretty name "mapping" for the car JSON
* Sort the lists so that filters and car placements are predictible
* Dom tricks to not show all cards on the DOM (performance) or paging/infinite scroll of data
* Add `scss` instead of regular `css` files
* More types and TypeScript strictness
