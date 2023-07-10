const ldap = require("ldapjs");

// Set up the LDAP client
const client = ldap.createClient({
  url: "ldap://127.0.0.1:1389", // Specify the correct LDAP server URL
});

// Bind to the LDAP server
client.bind("cn=admin", "password", (err) => {
  if (err) {
    console.error("LDAP bind error:", err);
    return;
  }
  console.log("LDAP bind successful");

  // Search for an object
  const opts = {
    filter: "(cn=admin)", // Specify a valid search filter
    scope: "sub",
  };
  client.search("dc=example,dc=com", opts, (err, res) => {
    if (err) {
      console.error("LDAP search error:", err);
      return;
    }

    res.on("searchEntry", (entry) => {
      console.log("LDAP search result:", entry.object);
    });

    res.on("error", (err) => {
      console.error("LDAP search error:", err);
    });

    res.on("end", () => {
      console.log("LDAP search complete");

      // Unbind from the LDAP server
      client.unbind((err) => {
        if (err) {
          console.error("LDAP unbind error:", err);
          return;
        }
        console.log("LDAP unbind successful");
      });
    });
  });
});
