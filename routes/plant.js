import * as dotenv from "dotenv";

import { fetchJson, postJson } from "../helpers/fetchWrapper.js";

import express from "express";

dotenv.config();

const plant = express.Router();

// Haal de gegevens van één member op
plant.get("/", (request, response) => {
  const id = request.query.id;
  if (!id) {
    response.redirect("/");
  }
  const url = `${process.env.API_URL}/stekjes/?id=${id}`;

  fetchJson(url).then((data) => {
    response.render("stekje", data);
  });
});
// verander dit later voor de detailpagina voor het plantje overzicht

// Toon het formulier om een nieuwe stekje aan te maken
plant.get("/nieuw", (request, response) => {
  response.render("plantForm.ejs");
});

// Handel het versturen van het formulier af
plant.post("/", (request, response) => {
  console.log(request.body);
  // Roep de API aan met de post methode
  const url = `${process.env.API_URL}/stekjes`;
  postJson(url, request.body).then((data) => {
    // De waarden uit het formulier (niet de API)
    let newPlant = { ...request.body };
    // Het id uit de API (overschrijft het formulier)
    newPlant.id = data.data.createMember.id || null;

    // Stuur de gebruiker naar / als het gelukt is
    if (data.success) {
      response.redirect("/?plantPosted=true"); // squad meegeven, message meegeven

      // Toon opnieuw het formulier (met waarden) als het niet gelukt is
    } else {
      response.render("plantForm.ejs", newPlant); // Fail, message meegeven
    }
  });
});

export default plant;
