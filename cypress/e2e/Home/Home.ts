import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TechEvent } from "../../../src/features/Events/domain/TechEvent.model";
import { LocalStorageTechEventRepository } from "../../../src/features/Events/infrastructure/LocalStorageTechEventRepository";

Given("A user enter to home page", () => {
  cy.visit("/");
});

Then("User see next events", () => {
  cy.wrap(findNextEvents()).then((subject: any) => {
    const { events } = subject as { events: TechEvent[] };

    events.forEach((e) => {
      cy.contains(e.title.value);
      cy.contains(e.shortDescription.value);
      cy.contains(e.getInitDate().toDDMMYYYY());
      cy.contains(e.location.value);
    });
  });
});

const findNextEvents = () => {
  return new Cypress.Promise((resolve, reject) => {
    const page = 1;
    const eventRepository = new LocalStorageTechEventRepository();
    eventRepository.findNextEvents(page).then(({ events }) => {
      resolve({ events });
    });
  });
};
