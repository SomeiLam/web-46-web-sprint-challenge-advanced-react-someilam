import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstNameInput = screen.getByLabelText(/First Name:/i);
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    const addressNameInput = screen.getByLabelText(/Address:/i);
    const cityNameInput = screen.getByLabelText(/City:/i);
    const stateNameInput = screen.getByLabelText(/State:/i);
    const zipNameInput = screen.getByLabelText(/Zip:/i);
    const button = screen.getByRole("button");
    userEvent.type(firstNameInput, "Amy");
    userEvent.type(lastNameInput, "Lam");
    userEvent.type(addressNameInput, "Downtown");
    userEvent.type(cityNameInput, "Palo Alto");
    userEvent.type(stateNameInput, "California");
    userEvent.type(zipNameInput, "00000");
    userEvent.click(button);
    const successMessage = screen.getByTestId("successMessage");
    expect(successMessage).toBeInTheDocument();
});
