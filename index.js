// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter((drivers) => drivers.toLowerCase() === name.toLowerCase());
}
findMatching(["Alice", "Bob", "Charlie"], "alice");
function fuzzyMatch(drivers, letters) {
    return drivers.filter((driver) => driver.startsWith(letters));
  }
  fuzzyMatch(["Alice", "Bob", "Charlie"], "Al"); // Output: ["Alice"]
  function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name === name);
  }
  const drivers = [
    { name: "Alice", hometown: "New York" },
    { name: "Bob", hometown: "Los Angeles" },
  ];
  matchName(drivers, "Alice"); 
  
  