import { faker } from "@faker-js/faker";

export function randomEmail() {
  return faker.internet.email();
}

export function randomPassword() {
  return faker.internet.password(12, true);
}

export function randomName() {
  return faker.person.fullName();
}

export function randomNameArea() {
  const areas = [
    "Matemática",
    "Física",
    "Química",
    "Biología",
    "Informática",
    "Astronomía",
    "Geografía",
    "Historia",
    "Literatura",
    "Arte",
    "Educación Cívica",
    "Filosofía",
    "Economía",
  ];
  return (
    faker.helpers.arrayElement(areas) +
    " " +
    faker.word.adjective({ length: { min: 3, max: 8 } })
  );
}

export function randomAreaDescription() {
  let description = "";
  let tries = 0;
  while ((description.length < 10 || description.length > 100) && tries < 10) {
    description = faker.lorem.sentence();
    if (description.length > 100) {
      description = description.slice(0, 100);
    }
    tries++;
  }
  if (description.length > 100) {
    description = description.slice(0, 100);
  }
  return description;
}

export function randomAreaCost() {
  return faker.number.int({ min: 10, max: 100 }).toString();
}

export function randomCategory() {
  const animalKeys = Object.keys(faker.animal);
  const key = animalKeys[Math.floor(Math.random() * animalKeys.length)];
  const animalType = faker.animal[key]();
  const label = `Cat ${animalType}`;
  return label.length > 30 ? label.slice(0, 30) : label;
}


