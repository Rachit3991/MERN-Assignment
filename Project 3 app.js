import { products } from "./Project 3 data.js";

import {
  findById,
  searchByName,
  filterByCategory,
  filterByPrice,
  inventoryValue,
  updateProduct,
  exportJSON,
  importJSON
} from "./Project 3 utils.js";

// Display all products
console.log("All Products:");
console.log(products);

// Find a product by ID
console.log("Product with ID 102:");
console.log(findById(products, 102));

// Search products by name
console.log("Search for 'smart':");
console.log(searchByName(products, "smart"));

// Filter products by category
console.log("Electronics Products:");
console.log(filterByCategory(products, "Electronics"));

// Filter products by price range
console.log("Products between ₹1000 and ₹10000:");
console.log(filterByPrice(products, 1000, 10000));

// Calculate total inventory value
console.log("Total Inventory Value:");
console.log(inventoryValue(products));

// Update a product price
const newList = updateProduct(products, 102, { price: 1800 });

console.log("Updated Headphones Price:");
console.log(findById(newList, 102).price);

// Check the original product price
console.log("Original Headphones Price:");
console.log(findById(products, 102).price);

// Export products to JSON
const jsonData = exportJSON(products);
console.log("Exported JSON:");
console.log(jsonData);

// Import JSON data
const importedProducts = importJSON(jsonData);
console.log("Imported Products:");
console.log(importedProducts);