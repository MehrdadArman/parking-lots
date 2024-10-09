/* eslint-disable @typescript-eslint/unbound-method */
import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  parkLots: {
    id: primaryKey(faker.string.uuid),
    name: faker.location.city,
    address: faker.location.streetAddress,
    image: faker.image.url,
    status: faker.string.uuid,
  },
  summaryView: {
    id: primaryKey(faker.string.uuid), // Generates a unique identifier
    name: faker.location.city, // Generates a random city name
    address: faker.location.streetAddress, // Generates a random street address
    image: faker.image.url, // Generates a random image URL
    status: {
      factory: () => faker.helpers.arrayElement(["active", "inactive"]),
    }, // Generates a random status string
    type: {
      factory: () => faker.helpers.arrayElement(["bad", "good"]),
    }, // Default to active
  },
});
