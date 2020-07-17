const express = require("express");
var faker = require("faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("This is your faker API server speaking...");
});

class User {
  constructor() {
    this.id = faker.random.uuid();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = faker.random.uuid();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

app.get("/api/users/new", (req, res) => {
  let newUser = new User();
  res.json({ message: "success", result: newUser });
});

app.get("/api/company/new", (req, res) => {
  let newCompany = new Company();
  res.json({ message: "success", result: newCompany });
});

app.get("/api/user/company", (req, res) => {
  let newUserCompany = { company: new Company(), user: new User() };
  res.json({ message: "success", result: newUserCompany });
});

const server = app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
