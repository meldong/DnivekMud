const ldap = require("ldapjs");

const client = ldap.createClient({
  url: "ldap://ldap.asmpt.com:389",
  bindDN: "CN=Administrator,CN=Users,DC=asmpt,DC=com",
  bindCredentials: "password",
  tlsOptions: {
    rejectUnauthorized: false,
  },
});
