import { sqliteConnection } from "..";
import { tableUsers } from "./tableUsers";
export async function runMigrations() {
  const shemes = [tableUsers].join("");

  sqliteConnection()
    .then((db) => {
      db.exec(shemes);
    })
    .catch((error) => {
      console.error(error);
    });
}
