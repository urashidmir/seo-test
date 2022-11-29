import React, { useState } from 'react';

const StructuredData = ({products}:{products: any}) => {
    const [valid, setValid] = useState(true);
    function getStructuredData(products: { data: { information: { pros: { pros: any; }; cons: { cons: any; }; }; title: any; rating: any; }; }[]){
        let productsArray = new Array();
        products.forEach((element: { data: { information: { pros: { pros: any; }; cons: { cons: any; }; }; title: any; rating: any; }; }, index: any) => {
            const pros = element.data.information.pros
                && element.data.information.pros.pros ?
                element.data.information.pros.pros
                : null;
            const cons = element.data.information.cons
                && element.data.information.cons.cons ?
                element.data.information.cons.cons
                : null;
            if(!pros){
                setValid(false);
            }
            if(!cons){
                setValid(false);
            }
            const positiveList = pros ? pros.map((pro: any, index: number) =>{
                const item = {
                    "@type": "ListItem",
                    "position": index+1,
                    "name": pro
                };
                return item;
            }):null;

            const negativeList = cons ? cons.map((con: any, index: number) =>{
                return {
                    "@type": "ListItem",
                    "position": index+1,
                    "name": con
                    }
            }):null;

            const entry = {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": element.data.title,
                "author": {
                    "@type": "Person",
                    "name": "Pascal Van Cleeff"
                },
                "review": {
                    "@type": "Review",
                    "author": {
                        "@type": "Person",
                        "name": "Pascal Van Cleeff"
                    },
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": element.data.rating,
                    },
                    "positiveNotes": {
                        "@type": "ItemList",
                        "itemListElement" : positiveList
                    },
                    "negativeNotes": {
                        "@type": "ItemList",
                        "itemListElement" : negativeList
                    },
                }
            };
            productsArray.push(entry);
        });

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement" : productsArray
        };

        return structuredData;
    }
    return (
        <>
           {products && valid ?
                <script
                    id = "structured-data"
                    key="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(products)) }}
                />
            : null}

        </>

      );
};

export default StructuredData;
