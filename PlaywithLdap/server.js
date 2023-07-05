const ldap = require("ldapjs");

// Create an LDAP server
const server = ldap.createServer();

// Set up the server's event handlers
server.on("bind", (req, res, next) => {
  // Bind request handler
  console.log("LDAP bind request:", req.dn.toString());
  if (
    req.dn.toString() !== "cn=admin,dc=example,dc=com" ||
    req.credentials !== "password"
  ) {
    return next(new ldap.InvalidCredentialsError());
  }
  res.end();
});

server.on("search", (req, res, next) => {
  // Search request handler
  console.log("LDAP search request:", req.dn.toString(), req.filter.toString());
  const obj = {
    dn: "cn=admin,dc=example,dc=com",
    attributes: {
      cn: ["admin"],
      sn: ["Admin"],
      email: ["admin@example.com"],
    },
  };
  if (req.filter.matches(obj.attributes)) {
    res.send(obj);
  }
  res.end();
});

// Start the server
server.listen(1389, () => {
  console.log("LDAP server listening on port 1389");
});
