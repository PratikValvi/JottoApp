import React from "react";
import { shallow, beforeEeach } from "enzyme";
import GuessedWords from "./GuessedWords";

describe('Tests for GuessedWords component & guess words message ', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<GuessedWords guessedWords={[]} />)
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

describe('Tests for Guessed Words Section', () => {

    let wrapper;

    const guessedWords = [
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
        { guessedWord: 'rain', letterMatchCount: 2 }
    ];

    beforeEach(() => {
        wrapper = shallow(<GuessedWords guessedWords={guessedWords}/>)
    });

    test('Guessed Words Section renders without error', () => {
        const component = wrapper.find("div.guessed-words");
        expect(component.length).toBe(1);
    });

    test('Guessed Words Section renders correct number of guessed words', () => {
        const guessedWordNodes = wrapper.find(".guessed-word");
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});