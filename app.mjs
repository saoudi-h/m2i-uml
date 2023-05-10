import cors from "cors";
import csrf from "csurf";
import chalk from "chalk";
import crypto from "crypto";
import helmet from "helmet";
import express from "express";
import config from "config";
import session from "express-session";
import Customer from "./src/classes/customer.mjs";
import "./loadEnvironment.mjs";


const app = express();


const PORT = config.app.port;
const link = `http://${config.app.host}:${PORT}`;
const secretSession = crypto.randomBytes(64).toString("hex");

// Configuration de la session
app.use(
  session({
    secret: secretSession,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: false,
    },
  })
);

app.use(csrf({}));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const fafa = new Customer('fafa');
console.log('debut impression');
fafa.print();

// services
// app.use("/contact", contact);
// app.use("/csrf", csrfToken);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`_`.repeat(60));
  console.log(" ");
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
  console.log(`Lien : ${chalk.blue(link)}`);
  console.log(" ");
  console.log("Server started.");
});
