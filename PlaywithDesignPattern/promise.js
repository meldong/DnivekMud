const fetchData = new Promise((resolve, reject) => {
  // async operation
  const data = getDataFromDatabase();

  if (data) {
    resolve(data);
  } else {
    reject("Error fetching data");
  }
});

fetchData
  .then((data) => {
    // handle successful data
  })
  .catch((err) => {
    // handle error
  });
