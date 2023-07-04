const ldap = require("ldapjs");

// Create a client
const client = ldap.createClient({
  url: ["ldap://127.0.0.1:1389", "ldap://127.0.0.2:1389"],
});

client.on("connectError", (err) => {
  // handle connection error
});

// Bind
client.bind("cn=root", "secret", (err) => {
  if (err) {
    console.error("LDAP bind error:", err);
    return;
  }
  console.log("LDAP bind successful");

  // Create a new object and add it to the directory
  //   const entry = {
  //     cn: "foo",
  //     sn: "bar",
  //     email: ["foo@bar.com", "foo1@bar.com"],
  //     objectclass: "fooPerson",
  //   };

  //   client.add("cn=foo, o=example", entry, (err) => {
  //     if (err) {
  //       console.error("LDAP add error:", err);
  //       return;
  //     }

  //     console.log("LDAP add successful");
  //   });

  // Unbind from the LDAP server
  client.unbind();
});
