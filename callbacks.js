const fetchData = (displayData) => {
  console.log("Fetching Data...");
  setTimeout(() => {
    const data = "Data after 2 seconds";
    displayData(data);
  }, 2000);
};

const displayData = (data) => {
  console.log(data);
};

fetchData(displayData);
