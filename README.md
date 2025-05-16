# 🚀 Cypress Automation Testing Project

## 📌 Project Overview

This project is an end-to-end (E2E) UI automation framework built using **Cypress**. It targets the [Automation Exercise](https://automationexercise.com) demo application and follows the **Page Object Model (POM)** design pattern for scalability and maintainability.

Dynamic test data is generated using **Faker**, and session cookies are managed for test reusability.

---

## 🛠️ Tech Stack

- **Cypress** v14.3.3 — JavaScript-based E2E testing framework
- **Node.js** v22.25.0 — Runtime environment for JavaScript
- **Mocha** — Cypress’s built-in test runner
- **Faker** — Fake data generation for testing

---

## 📦 Installation & Setup

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/iamsandhya/Intuji-QA-Associate-Challenge.git
cd your-repo-name
```
### 2️⃣ Install Dependencies
npm ci installs dependencies strictly as defined in package-lock.json, ensuring a clean and reliable environment
```bash
npm ci
```
### 👉 Run Cypress in Interactive Mode (GUI)
This opens the Cypress Test Runner, allowing you to run and debug tests interactively
```bash
npm run cy:open
```

### 👉 Run Cypress in Headless Mode (CLI)
Executes all tests via the command line, ideal for CI/CD pipelines.
```bash
npm run cy:run
```

### Available custom commands
```
signup -> Signs up the user

login -> logs in the user

logout -> logs out the user

verifyproduct -> Goes to product page, filter the product by category based and adds to cart

managecart -> Asserts cart related test cases
```
To use: 
```
cy.signup();
cy.login();
cy.logout();
cy.verifyproduct();
cy.managecart();
```

### 🔮 Future Updates 
```
✅  Signup Functionality 
📌Email Format Validation
📌Password Length & Strength
📌Script Injection

✅ Login Functionality
📌Valid login
📌Case sensitivity
📌Login using Enter key
📌Email Format Validation

✅ Product Browsing & Filtering 
📌Category Structure Changes
📌Filter Behavior Improvements
📌UI & Navigation Updates
📌Valid login

✅ Cart and Quantity Management 
📌UI/UX Validations
📌Negative Testing(Bulk Add to Cart feature testing,out of stock scenarios)
📌Cart Management Enhancements

✅ Checkout Flow with Fake Payment 
📌Enter invalid CVV and expire card
```

## 📄 Test Cases Document
[📑 Test Cases - Google Sheet]

This test cases is publicly available because I don’t have specific user email to invite for this excel sheet.
You can find the detailed test cases for all the scenarios in the following Google Sheet:


👉 Click here to view the Test Cases
```
(https://docs.google.com/spreadsheets/d/1D-yhpwt7sjHZjnrT8FgkO6y9bbkQVtA7ATxK_4-J8Ns/edit?usp=sharing)
```