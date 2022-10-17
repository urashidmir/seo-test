## Description

Product articles do not currently have valid structured data for Pros and Cons snippets on
Google.
Example of an article with pros and cons: 10 best budget phones: Cheap smartphones with high-end features

## Documentation

https://developers.google.com/search/docs/data-types/review-snippet
Example of current structured data code for pros and cons

## User story

As Head of Audience, I want Pros and Cons articles to be recognised as pros and cons by Google
So that they display as pros and cons snippets in search results.

## Acceptance criteria

1 - Create a component that renders valid structured data (https://developers.google.com/search/docs/data-types/review-snippet)
2 - Create a valid unit test that ensures when there is a valid pros and cons array comming from the api response the application will render the structured data.

on the products array there is am object called information this is there you will find the ifomation you need

Given I have created an article using the "Product" article type in the CMS
And I have completed all the applicable fields
When I inspect the article URL on Google Search Console
Then it will be recognised as a pros and cons snippet
And the pros and cons snippet will not contain any structured data errors
Must use unit test using jest
