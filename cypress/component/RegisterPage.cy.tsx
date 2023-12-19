import React from 'react';
import RegisterPage from '@/pages/register/RegisterPage';
import * as NextRouter from 'next/router';

describe('<RegisterPage />', () => {
  it('renders', () => {
    const pathname = 'fake-path';
    const push = cy.stub();
    cy.stub(NextRouter, 'useRouter').returns({ pathname, push });
    cy.mount(<RegisterPage />);
  });
});

// todo:
// cypress/component/Form.cy.tsx

// import Form, { FormValues } from "@/components/Form";

// describe("Form component", () => {
//   it("should render all form fields", () => {
//     const handleSubmit = cy.stub();
//     cy.mount(<Form handleSubmit={handleSubmit} />);
//
//     cy.get("[data-cy=fullNameInputLabel]").should("be.visible");
//     cy.get("[data-cy=fullNameInput]").should("be.visible");
//
//     cy.get("[data-cy=dateOfBirthInputLabel]").should("be.visible");
//     cy.get("[data-cy=dateOfBirthInput]").should("be.visible");
//
//     cy.get("[data-cy=emailInputLabel]").should("be.visible");
//     cy.get("[data-cy=emailInput]").should("be.visible");
//
//     cy.get("[data-cy=mobileInputLabel]").should("be.visible");
//     cy.get("[data-cy=mobileNumberInput]").should("be.visible");
//
//     cy.get("[data-cy=computerSelectLabel]").should("be.visible");
//     cy.get("[data-cy=computerSelect]").should("be.visible");
//
//     cy.get("[data-cy=fileInputLabel]").should("be.visible");
//     cy.get("[data-cy=fileInput]").should("be.visible");
//
//     cy.get("[data-cy=radioRadioLabel]").should("be.visible");
//     cy.get("[data-cy=coffeeRadio]").should("be.visible");
//     cy.get("[data-cy=teaRadioLabel]").should("be.visible");
//     cy.get("[data-cy=teaRadio]").should("be.visible");
//
//     cy.get("[data-cy=submitButton]").should("be.visible");
//   });
//
//   it("should not submit the form if required fields are empty", () => {
//     const handleSubmit = cy.stub();
//     cy.mount(<Form handleSubmit={handleSubmit} />);
//
//     cy.get("[data-cy=submitButton]").click();
//     expect(handleSubmit).not.to.be.called;
//   });
//
//   it("should submit the form with correct values", () => {
//     const handleSubmit = cy.stub();
//     cy.mount(<Form handleSubmit={handleSubmit} />);
//
//     cy.get("[data-cy=fullNameInput]").type("John Doe");
//     cy.get("[data-cy=dateOfBirthInput]").type("1990-01-01");
//     cy.get("[data-cy=emailInput]").type("john.doe@example.com");
//     cy.get("[data-cy=mobileNumberInput]").type("+65 1234 5678");
//     cy.get("[data-cy=computerSelect]").select("Mac");
//     cy.get("[data-cy=coffeeRadio]").check();
//     cy.get("[data-cy=fileInput]").selectFile({
//       contents: Cypress.Buffer.from("file contents"),
//       fileName: "file.txt",
//       lastModified: Date.now(),
//     });
//
//     cy.get("[data-cy=submitButton]").click();
//
//     const formValues: FormValues = {
//       fullName: "John Doe",
//       dateOfBirth: "1990-01-01",
//       email: "john.doe@example.com",
//       mobileNumber: "+65 1234 5678",
//       computer: "mac",
//       file: new File([], "file.txt"),
//       beverage: "coffee",
//     };
//
//     cy.wrap(handleSubmit).should("be.calledOnceWith", formValues);
//   });
// });
