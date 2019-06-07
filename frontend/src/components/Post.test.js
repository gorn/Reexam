import React from 'react';
import Post from './Post';
import {cleanup, render, fireEvent} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

describe('Headers there', ()=>{
    it('needs to contain the text', ()=> {
        const {getbyText} = render(<BrowserRouter><Post/></BrowserRouter>);
            getbyText('Add a job post');
    })
});

afterEach(cleanup);