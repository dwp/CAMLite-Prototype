/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  window.MOJFrontend.initAll()
})

new MOJFrontend.ButtonMenu({
  container: $("#navi-search"),
  mq: "(min-width: 200em)",
  buttonText: "Search",
  menuClasses: "moj-button-menu__wrapper--right",
});

new MOJFrontend.ButtonMenu({
  container: $("#cases-list-menu"),
  mq: "(min-width: 200em)",
  buttonText: "Menu",
  buttonClasses:
    "govuk-button--secondary moj-button-menu__toggle-button--secondary",
});
