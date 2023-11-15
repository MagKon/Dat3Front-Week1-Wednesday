// JokeComponent.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import JokeComponent from "./JokeComponent";

// Mock the fetch function
global.fetch = jest.fn();

// Mock the response from Chuck Norris API
const mockChuckNorrisResponse = {
  value: "Chuck Norris can divide by zero.",
};

// Mock the response from Dad Jokes API
const mockDadJokesResponse = {
  joke: "What do you call a cow with no legs? Ground beef.",
};

describe("JokeComponent", () => {
  beforeEach(() => {
    // Reset the fetch mock before each test
    global.fetch.mockReset();
  });

  test("Render a joke from Chuck Norris API", async () => {
    // Fetch from mock api
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockChuckNorrisResponse),
    });

    // Render the component
    render(<JokeComponent />);

    // Check if the joke is rendered
    await waitFor(() => screen.findByText("Chuck Norris can divide by zero."));
  });
});
