import * as dotenv from "dotenv";
import { fetchJson, postJson } from "../helpers/fetchWrapper.js";
import express from "express";

dotenv.config();

const plantForm = express.Router();

// FORM ROUTE
// Toon het formulier om een nieuwe stekje aan te maken
plantForm.get("/", (request, response) => {
  response.render("plantForm");
});

// // Handel het versturen van het formulier af
// plantForm.post("/", (request, response) => {
//   console.log(request.body);
//   // Roep de API aan met de post methode
//   const url = `${process.env.API_URL}/stekjes`;
//   postJson(url, request.body).then((data) => {
//     // De waarden uit het formulier (niet de API)
//     let plantForm = { ...request.body };
//     // Het id uit de API (overschrijft het formulier)
//     plantForm.id = data.data.createMember.id || null;

//     // Stuur de gebruiker naar / als het gelukt is
//     if (data.success) {
//       response.redirect("/?plantPosted=true"); // squad meegeven, message meegeven

//       // Toon opnieuw het formulier (met waarden) als het niet gelukt is
//     } else {
//       response.render("plantForm.ejs", newPlant); // Fail, message meegeven
//     }
//   });
// });

export default plantForm;
