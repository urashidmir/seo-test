import "@testing-library/jest-dom";
import { render} from '@testing-library/react';
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

const withoutPros = [
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

const withoutCons = [
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
            "title": ""
          }
        }
      }
    }
  ];

const emptyPros = [
    {
      "type": "product",
      "data": {
        "information": {
          "pros": {
            "pros": [
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

const emptyCons = [
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
            ],
            "title": ""
          }
        }
      }
    }
  ];

describe('Testing with valid data', () => {
  it('Should render structured data script', () => {
    const { container } = render(<StructuredData products={validData} />);
    expect(container.firstElementChild?.id.startsWith('structured-data'));
  });
});

describe('Testing with empty pros array', () => {
  it('Should render structured data script', () => {
    const { container } = render(<StructuredData products={emptyPros} />);
    expect(container.firstElementChild?.id.startsWith('structured-data'));
  });
});

describe('Testing with empty cons array', () => {
  it('Should render structured data script', () => {
    const { container } = render(<StructuredData products={emptyCons} />);
    expect(container.firstElementChild?.id.startsWith('structured-data'));
  });
});

describe('Testing without pros array', () => {
  it('Should render null', () => {
    const { container } = render(<StructuredData products={withoutPros} />);
    expect(container).toBeEmptyDOMElement();
  });
});

describe('Testing without cons array', () => {
  it('Should render null', () => {
    const { container } = render(<StructuredData products={withoutCons} />);
    expect(container).toBeEmptyDOMElement();
  });
});
