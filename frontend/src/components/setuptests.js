// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom matchers
import 'jest-dom/extend-expect';
// some global test data for all your tests
global.jobTestData = [
    {
        "_id": "5cf780e4c1423f4e809f6957",
        "title": "title1",
        "company": "company1",
        "description": "description1",
        "area": {
            "_id": "5cf666e00c315e0264b09328",
            "name": "Copenhagen",
            "namePath": "Copenhagen",
            "__v": 0
        },
        "category": {
            "_id": "5cf6be3f19bcbb5d981ae5a5",
            "name": "Education",
            "namePath": "Education",
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "5cf7a04f9b57dd60c8231f70",
        "title": "title2",
        "company": "company2",
        "description": "description2",
        "area": {
            "_id": "5cf666e00c315e0264b09328",
            "name": "Copenhagen",
            "namePath": "Copenhagen",
            "__v": 0
        },
        "category": {
            "_id": "5cf6be3f19bcbb5d981ae5a5",
            "name": "Education",
            "namePath": "Education",
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "5cf7aeec9b57dd60c8231f71",
        "title": "title3",
        "company": "company3",
        "description": "description3",
        "area": {
            "_id": "5cf666e00c315e0264b09328",
            "name": "Copenhagen",
            "namePath": "Copenhagen",
            "__v": 0
        },
        "category": {
            "_id": "5cf6be3f19bcbb5d981ae5a5",
            "name": "Education",
            "namePath": "Education",
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "5cfa18f2ed1c982f301a929c",
        "title": "title3",
        "company": "company3",
        "description": "description3",
        "area": {
            "_id": "5cf666e00c315e0264b0932a",
            "name": "Aalborg",
            "namePath": "Aalborg",
            "__v": 0
        },
        "category": {
            "_id": "5cf6be3f19bcbb5d981ae5a7",
            "name": "Healtcare",
            "namePath": "Healthcare",
            "__v": 0
        },
        "__v": 0
    }
];
global.categoryTestData= [
    {
        "_id": "5cf6be3f19bcbb5d981ae5a5",
        "name": "Education",
        "namePath": "Education",
        "__v": 0
    },
    {
        "_id": "5cf6be3f19bcbb5d981ae5a4",
        "name": "IT",
        "namePath": "IT",
        "__v": 0
    },
    {
        "_id": "5cf6be3f19bcbb5d981ae5a7",
        "name": "Healtcare",
        "namePath": "Healthcare",
        "__v": 0
    },
    {
        "_id": "5cf6be3f19bcbb5d981ae5a8",
        "name": "Sales",
        "namePath": "Sales",
        "__v": 0
    },
    {
        "_id": "5cf6be3f19bcbb5d981ae5a6",
        "name": "Marketing",
        "namePath": "Marketing",
        "__v": 0
    }
];