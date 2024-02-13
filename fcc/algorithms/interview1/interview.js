// https://randomuser.me/api/?results=50
// get the first results
// get between age30 and 60
// sort on age from lower to higer

const axios = require("axios");

async function fetchRandomUsers() {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=50");
    const users = response.data.results;
    return users;
  } catch (error) {
    console.error("Error fetching random users:", error);
    return null;
  }
}

async function main() {
  let users = await fetchRandomUsers();
  console.log(users);
}

main();
