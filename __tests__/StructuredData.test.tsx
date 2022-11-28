import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import React from "react";

import StructuredData from "../components/StructuredData";

const validData = [
    {
      "type": "product",
      "data": {
        "information": {
          "pros": {
            "pros": [
              "Stunning screen",
              "Quality cameras",
              "Five years of security updates"
            ]
          },
          "cons": {
            "cons": [
              "No wireless charging",
              "Average performance"
            ],
            "title": ""
          }
        }
      }
    }
  ];

const invalidData = [
    {
      "type": "product",
      "data": {
        "information": {
          "pros": {
          },
          "cons": {
            "cons": [
              "No wireless charging",
              "Average performance"
            ],
            "title": ""
          }
        }
      }
    }
  ];

describe('Testing will valid data', () => {
  it('Should render structured data', () => {
    const { container } = render(<StructuredData products={validData} />);
    expect(container.firstElementChild?.id.startsWith('structured-data'));
  });
});

describe('Testing will invalid data', () => {
  it('Should render null', () => {
    const { container } = render(<StructuredData products={invalidData} />);
    expect(container).toBeEmptyDOMElement();
  });
});