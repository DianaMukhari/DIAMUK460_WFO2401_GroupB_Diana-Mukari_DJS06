// List of provinces
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// List of names
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// List of products with prices
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Basic Exercises

// 1. ForEach Basics
// Logging each name
console.log("NAMES: ")
names.forEach(name => console.log(name));

// Logging each province
console.log("PROVINCES: ")
provinces.forEach(province => console.log(province));

// Logging each name with its matching province
console.log("EACH NAME WITH IT'S PROVINCE ")
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
console.log("PROVINCES IN UPPERCASE")
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);  // Logging the new array of provinces in uppercase

// 3. Name Lengths
console.log("NAME LENGTH: ")
const nameLengths = names.map(name => name.length);
console.log(nameLengths);  // Logging the array containing the length of each name

// 4. Sorting
console.log("ALPHABETICALLY SORTED PROVINCES: ")
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);  // Logging the alphabetically sorted provinces

// 5. Filtering Cape
console.log("COUNT OF PROVINCES WITHOUT 'CAPE': ")
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);  // Logging the count of remaining provinces after filtering

// 6. Finding 'S'
console.log("CHECKING FOR 'S' ")
const containsS = names.map(name => /s/i.test(name));// matches the letter s in a case-insensitive manner
console.log(containsS);  // Logging the boolean array indicating if each name contains the letter 'S'

// 7. Creating Object Mapping/Uses reduce to transform the names array into an object
console.log("NAMES ARRAY TURNED TO ANN OBJECT: ")
const nameToProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameToProvinceMap);  // Logging the object mapping names to their respective provinces

// Advanced Exercises 

// 1. Logging the name of each Product
console.log("PRODUCT NAMES: ");
products.forEach(product => console.log(product.product));

// 2. Filtering by Name Length
console.log("PRODUCTS WITH NAME LENGTH LESS THAN 5: ");
const shortNameProducts = products.filter(product => product.product.length <= 5);
shortNameProducts.forEach(product => console.log(product.product));  // Logging each product with a short name

// 3. Filters out products without valid prices and sums the total price
console.log("TOTAL PRICE OF VALID PRODUCTS: ");
const totalPrice = products
  .filter(product => String(product.price).trim() !== '')
  .map(product => ({ ...product, price: parseFloat(product.price) }))// converts string prices to numbers
  .reduce((total, product) => total + product.price, 0);// calculates the total price
console.log(totalPrice);  // Logging the total price

// 4. Concatenates all product names into a single string and logs it
console.log("SINGLE STRING OF ALL PRODUCT NAMES: ");
const concatenatedNames = products.reduce((acc, product) => acc + product.product, '');
console.log(concatenatedNames);  // Logging the concatenated string

// 5. Identifies and logs the highest and lowest-priced items
console.log("HIGHEST AND LOWEST PRICED ITEMS: ");
const priceSummary = products
  .map(product => parseFloat(product.price))
  .filter(price => !isNaN(price))  // Exclude NaN values
  .reduce((acc, price) => {
    acc.highest = Math.max(acc.highest, price);
    acc.lowest = acc.lowest === null || price < acc.lowest ? price : acc.lowest;
    return acc;
  }, { highest: -Infinity, lowest: null });
console.log(`Highest: ${priceSummary.highest}, Lowest: ${priceSummary.lowest}`);

console.log("NAME AND COST:");
console.log(products.reduce((acc, product) => {
  acc.push({ name: product.product, cost: product.price });
  return acc;
}, []));
