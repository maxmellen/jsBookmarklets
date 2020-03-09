const UNIQUE_ID = require("crypto")
  .randomBytes(36)
  .toString("base64");

module.exports = f => {
  process.stdout.write(
    `javascript:${f
      .toString()
      .replace("UNIQUE_ID", UNIQUE_ID)
      .split("\n")
      .slice(1, -1)
      .map(l => l.trim())
      .join("")}`
  );
};
