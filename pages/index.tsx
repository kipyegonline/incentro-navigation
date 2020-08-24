import Head from "next/head";
import React from "react";
import NavBar from "../components/Nav";
import styles from "../styles/Home.module.css";
import BackDrop from "../components/backdrop";
import { Typography, Divider, Grid } from "@material-ui/core";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState(0);
  let langs: string[] = ["English", "Kiswahili", "Dutch"];
  return (
    <div className={styles.container}>
      <Head>
        <title>Incentro NavBar</title>
        <link rel="icon" href="/fave.png" />
      </Head>
      <NavBar open={open} setOpen={setOpen} lang={lang} setLang={setLang} />
      <BackDrop open={open} lang={lang} />
      <Grid>
        <Typography
          className={styles.landingHeader}
          align="center"
          variant="h3"
        >
          {lang < 1 ? "Welcome Here" : lang < 2 ? "Karibu hapa" : "Welkom hier"}
        </Typography>
        <Divider />
      </Grid>
      <footer>
        <Typography variant="h5">
          Created with <span style={{ color: "red" }}>&hearts;</span> by{" "}
          <a href="https://twitter.com/kipyegonline">Vince</a>
        </Typography>
        <Divider />
      </footer>
    </div>
  );
}

const skills = [
  {
    language: "JavaScript",
    libraries: [
      "React js",
      "jQuery",
      "Redux",
      "Next Js",
      "Gatsby",
      "TypeScript",
      "D3 js",
      "CSS in JS",
      "Unit Testing (jest,Enzyme and Cypress)",
    ],
  },
  { language: "Python", libraries: ["Python", "Pandas"] },
  { language: "PHP", libraries: ["PHP core", "MySql"] },
  {
    language: "C#",
    libraries: [
      "I am currently learning C#, static and strongly typed object oriented language ",
    ],
  },
];

console.log(
  "%cHello there, \n why are you here? \n Anyway,since you're here,  my name is Vincent Kipyegon, a front end react web developer with over 3 years of experience. I enjoy building interfaces with javascript,backend stuff with php and Mysql and data analysis with python. \n \
    Get in touch %cvincekipyegon11@gmail.com",
  "font-family:cursive;font-size:1rem;",
  "font-weight:bold; font-family:cursive;font-size:1rem;"
);
for (let i = 0; i < skills.length; i++) {
  console.log(
    `%c${skills[i].language} \n `,
    "font-weight:bold; font-size:1rem;border-bottom:1px solid purple; color:purple; font-family:cursive;"
  );
  let lib = skills[i].libraries;
  //console.table(lib);
  //libraries
  for (let j = 0; j < lib.length; j++) {
    if (j < 1) {
      console.log(
        "%cLibrarie(s): ",
        "font-style:italic; font-weight:bold; margin-left:.35rem"
      );
    }

    console.log(`%c${j + 1}. ${lib[j]}`, "margin-left:.5rem");
  }
  //css frameworks
}
