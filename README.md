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

Accomplished:
* Jasime Unit tests
* Some integration tests
* Card based layout
* Filters work as a `OR` filter
* Angular2+ (Angular5)
* TypeScript in most areas. Very few `any`

TODO:
* Use -1 for filters
* Implement cars as a AngularService
* Use pipe for title case formatting
* Use cypress.io for e2e testing
* Add `scss` instead of regular `css` files
* Style the checkbox
* Use more semantic HTML such as `<section>` where appropriate
* Remove use of float for all flex-box.
* JSDocs for the source
* Pretty name "mapping" for the car JSON
* Sort the lists so that filters are predictible
