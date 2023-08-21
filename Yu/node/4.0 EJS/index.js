import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function weekVerify() {
  const d = new Date();
  let day = d.getDay();
  if (day == 0 || day == 6) {
    return "weekend";
  } else {
    return "weekday";
  }
}

function timeVerify() {
  const d = new Date();
  let day = d.getDay();
  if (day == 0 || day == 6) {
    return "have fun!";
  } else {
    return "work hard!";
  }
}
app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    periodOfWeek: weekVerify(),
    itsTimeTo: timeVerify(),
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
