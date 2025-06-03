import { rehashPlainPasswords } from "./src/lib/utils.js";

rehashPlainPasswords().then(() => {
  console.log("All done!");
  process.exit(0);
}).catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});