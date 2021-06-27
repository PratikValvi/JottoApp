import React from "react";
import { shallow, beforeEeach } from "enzyme";
import GuessedWords from "./GuessedWords";

describe('Tests for GuessedWords component & guess words message ', () => {

    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<GuessedWords guessedWords={[]}/>)
    });
    
    test("GuessedWords component renders without error", () => {
        const component = wrapper.find("div.guessed-words-wrapper");
        expect(component.length).toBe(1);
    });

    test("GuessedWords component renders guess words message when guessedWords array is empty", () => {
        const component = wrapper.find("span.guess-word-message").text();
        expect(component.length).not.toBe(0);
    });
});