const restaurants = [
  { name: "Salsarita's", budget: "$" },
  { name: "Jay's Diner", budget: "$" },   { name: "MacGregor's Grill", budget: "$$" },
  { name: "The Owl House", budget: "$$" },   { name: "Park Avenue Pub", budget: "$$$" }
];

function pickRestaurant() {
  const selectedBudget = document.getElementById('budget').value;
  
  const filtered = selectedBudget === 'any' 
    ? restaurants 
    : restaurants.filter(r => r.budget === selectedBudget);

  if (filtered.length === 0) {
    document.getElementById('result').innerText = "No restaurants match that budget!";
    return;
  }

  const choice = filtered[Math.floor(Math.random() * filtered.length)];
  document.getElementById('result').innerText = `🎯 You should try: ${choice.name}!`;
}
