const menu = [
  "Chhole Kultche",
  "Kadhai Paneer",
  "Kadhai Chicken",
  "Jeera Rice",
  "Chillie potato",
  "Onion Rings",
  "Onion Paratha",
  "Garlic Naan",
  "Pizza",
  "Chicken korma",
  "Butter chicken",
  "Garlic roast chicken",
  "Garlic Rasam",
];

function IsVeg(item) {
  if (
    item.toLowerCase().indexOf("chicken") != -1 ||
    item.toLowerCase().indexOf("egg") != -1
  ) {
    return false;
  } else return true;
}

function IsJain(item) {
  if (
    item.toLowerCase().indexOf("onion") != -1 ||
    item.toLowerCase().indexOf("garlic") != -1
  ) {
    return false;
  } else return true;
}

const VegItems = menu.filter(IsVeg);
// console.log(VegItems);

const JainItems = menu.filter(IsVeg).filter(IsJain);
console.log(JainItems);
