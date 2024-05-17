import puppeteer from "puppeteer";
import fs from "node:fs";
import { load } from "cheerio";
import axios from "axios";
import { fileURLToPath } from "node:url";
import express from "express";
import path from "node:path";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.use("/plots",express.static(path.join(__dirname,"plots")));

app.get("/", (req, res)=>{

    console.log("API url hit..");
  
    res.sendFile(__dirname + "/index.html");
})
app.listen(8082, ()=>{
  console.log("Server is called");
})


  // async function getCap(){

  //   const browser = await puppeteer.launch()
  //   const page = await browser.newPage()
  //   await page.goto("https://www.iplt20.com/stats/2024")

  //   const cap = await page.evaluate(() => {
  //     return Array.from(document.querySelectorAll('[class="cSBListItems batters selected ng-binding ng-scope selected1"]')).map(x => x.textContent)
  //   })
  //   res.push(cap);

  //   await browser.close();
    
  // }

// start()