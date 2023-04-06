import * as dotenv from "dotenv";
import { postJson } from "../helpers/fetchWrapper.js";
import express from "express";

dotenv.config();

const plantRoute = express.Router();

plantRoute.get("/", (request, response) => {
  //Deze code zorgt ervoor dat wanneer er een GET-request naar de "/" route van de plantNew.js komt, de "plantNew" sjabloon wordt gerenderd en als een plantNew.ejs wordt geretourneerd.
  response.render("plantNew");
});

//  Roep de API aan met de post methode en post in de API, die vervolgens wordt getoond in de index.ejs waar de get plaats vindt.
plantRoute.post("/", (request, response) => {
  const baseUrl = `${process.env.API_URL}/stekjes`;

  postJson(baseUrl, request.body).then((data) => {
    if (data.success) {
      response.redirect("/"); // plant meegeven, message meegeven
      // Toon opnieuw het formulier (met waarden) als het niet gelukt is
    } else {
      response.render("/aanmelden", error); // Fail, message meegeven
    }
  });
  //  De waarden uit het formulier (niet de API)
  console.log(JSON.stringify(data));
});

export default plantRoute;
