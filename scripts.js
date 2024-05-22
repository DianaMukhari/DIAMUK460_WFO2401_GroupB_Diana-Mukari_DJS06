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
names.forEach(name => console.log(name));

// Logging each province
provinces.forEach(province => console.log(province));

// Logging each name with its matching province
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);  // Logging the new array of provinces in uppercase

// 3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);  // Logging the array containing the length of each name

// 4. Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);  // Logging the alphabetically sorted provinces

// 5. Filtering Cape
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);  // Logging the count of remaining provinces after filtering

// 6. Finding 'S'
const containsS = names.map(name => /s/i.test(name));// matches the letter s in a case-insensitive manner
console.log(containsS);  // Logging the boolean array indicating if each name contains the letter 'S'

// 7. Creating Object Mapping/Uses reduce to transform the names array into an object
const nameToProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameToProvinceMap);  // Logging the object mapping names to their respective provinces

// Advanced Exercises 

// 1. Logging the name of each Products
console.log(products.map(product => product.product));

// 2. Filtering by Name Length
console.log(products.filter(product => product.product.length <= 5));

//3.Filters out products without valid prices
console.log(products
  .filter(product => String(product.price).trim() !== '')
  .map(product => ({ ...product, price: parseFloat(product.price) }))// converts string prices to numbers
  .reduce((total, product) => total + product.price, 0)//calculates the total price
);

// 4. Concatenates all product names into a single string and logs it
console.log(products.reduce((acc, product) => acc + product.product, ''));

// 5. Identifies and logs the highest and lowest-priced items
console.log(products
  .map(product => parseFloat(product.price) || 0)
  .reduce((acc, price) => {
    acc.highest = Math.max(acc.highest, price);
    acc.lowest = acc.lowest === null || price < acc.lowest ? price : acc.lowest;
    return acc;
  }, { highest: -Infinity, lowest: null })
);

// 6. Uses reduce to recreate the products array with objects containing 'name' and 'cost' keys and logs it.
console.log(products.reduce((acc, product) => {
  acc.push({ name: product.product, cost: product.price });
  return acc;
}, []));
