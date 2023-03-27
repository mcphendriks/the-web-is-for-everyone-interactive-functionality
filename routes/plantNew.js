import * as dotenv from "dotenv";
import { fetchJson } from "../helpers/fetchWrapper.js";
import express from "express";

dotenv.config();

const plantRoute = express.Router();

// STEKJE DETAIL PAGE ROUTE
plantRoute.get("/stek", (request, response) => {
  const id = request.query.id;
  if (!id) {
    response.redirect("/");
  }
  const url = `${process.env.API_URL}/stekjes/?id=${id}`;

  fetchJson(url).then((data) => {
    response.render("stekje", data);
  });
});

export default plantRoute;
