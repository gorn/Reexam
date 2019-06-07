import React from 'react';
import Categories from './Categories';
import {cleanup, render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe('Headline present', ()=>{
    it('needs to contain the text', ()=> {
        const {getbyText} = render(<BrowserRouter><Categories/></BrowserRouter>);
        getbyText('Categories');
    })
});

afterEach(cleanup);