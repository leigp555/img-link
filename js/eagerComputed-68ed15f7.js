import{R as n}from"./responsiveObserve-0d8f2852.js";import{b as s,g as u,A as r,R as e,H as a}from"./index-44b8c168.js";function i(){var e=s({}),a=null;return u((function(){a=n.subscribe((function(n){e.value=n}))})),r((function(){n.unsubscribe(a)})),e}function o(n){var s=e();return a((function(){s.value=n()}),{flush:"sync"}),s}export{o as e,i as u};