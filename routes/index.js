import * as dotenv from "dotenv";
import express from "express";
import { fetchJson } from "../helpers/fetchWrapper.js";

dotenv.config();

const indexRoute = express.Router();

//  De GET-request haalt gegeven op uit de server.Vervolgens wordt de gebruiker terug gestuurd naar index.ejs PAGE
indexRoute.get("/", (request, response) => {
  const url = `${process.env.API_URL}/stekjes`;
  fetchJson(url).then((data) => {
    response.render("index", data);
  });
});

export default indexRoute;
