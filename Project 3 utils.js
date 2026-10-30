export function findById(list, id) {
  return list.find(p => p.id === id);
}

export function searchByName(list, text) {
  return list.filter(p =>
    p.name.toLowerCase().includes(text.toLowerCase())
  );
}

export function filterByCategory(list, category) {
  return list.filter(p => p.category === category);
}

export function filterByPrice(list, min, max) {
  return list.filter(p => p.price >= min && p.price <= max);
}

export function inventoryValue(list) {
  return list.reduce((sum, p) => sum + p.price * p.stock, 0);
}

// Returns a new array without modifying the original
export function updateProduct(list, id, changes) {
  return list.map(p =>
    p.id === id ? { ...p, ...changes } : p
  );
}

// JSON export and import
export const exportJSON = list => JSON.stringify(list, null, 2);
export const importJSON = text => JSON.parse(text);