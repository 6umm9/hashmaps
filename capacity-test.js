import { HashMap } from './hashmap.js';

const test = new HashMap();

console.log("--- Initial State ---");
console.log("Capacity:", test.capacity);
console.log("Load Factor:", test.loadFactor);
console.log("Length:", test.length());

console.log("\n--- Populating HashMap ---");
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log("Length after population:", test.length());
console.log("Capacity after population:", test.capacity);
console.log("Current load level:", test.length() / test.capacity);
console.log("Expected load level: 0.75");

console.log("\n--- Overwriting Existing Nodes ---");
console.log("Before overwrite - get('apple'):", test.get('apple'));
console.log("Before overwrite - get('banana'):", test.get('banana'));
console.log("Before overwrite - get('carrot'):", test.get('carrot'));

test.set('apple', 'crimson');
test.set('banana', 'golden yellow');
test.set('carrot', 'bright orange');

console.log("\nAfter overwrite - get('apple'):", test.get('apple'));
console.log("After overwrite - get('banana'):", test.get('banana'));
console.log("After overwrite - get('carrot'):", test.get('carrot'));

console.log("\n--- Verifying No New Entries Added ---");
console.log("Length after overwrites:", test.length());
console.log("Capacity after overwrites:", test.capacity);
console.log("Length should still be 12:", test.length() === 12);
console.log("Capacity should still be 16:", test.capacity === 16);

console.log("\n--- Triggering Resize by Exceeding Load Factor ---");
console.log("Adding 'moon' to trigger resize...");
test.set('moon', 'silver');

console.log("Length after adding 'moon':", test.length());
console.log("Capacity after resize:", test.capacity);
console.log("New load level:", test.length() / test.capacity);
console.log("Capacity should have doubled to 32:", test.capacity === 32);
console.log("Load level should be below 0.75:", (test.length() / test.capacity) < 0.75);

console.log("\n--- Verifying Data Integrity After Resize ---");
console.log("get('apple'):", test.get('apple'));
console.log("get('moon'):", test.get('moon'));
console.log("get('lion'):", test.get('lion'));

console.log("\n--- Overwriting After Resize ---");
test.set('moon', 'bright silver');
test.set('lion', 'majestic golden');
console.log("After overwrite - get('moon'):", test.get('moon'));
console.log("After overwrite - get('lion'):", test.get('lion'));
console.log("Length after overwrites (should still be 13):", test.length());

console.log("\n--- Testing get(key) ---");
console.log("get('grape'):", test.get('grape'));
console.log("get('nonexistent'):", test.get('nonexistent'));

console.log("\n--- Testing has(key) ---");
console.log("has('hat'):", test.has('hat'));
console.log("has('nonexistent'):", test.has('nonexistent'));

console.log("\n--- Testing remove(key) ---");
console.log("Removing 'kite'...");
console.log("remove('kite'):", test.remove('kite'));
console.log("Length after remove:", test.length());
console.log("has('kite') after remove:", test.has('kite'));
console.log("Attempting to remove nonexistent key:");
console.log("remove('nonexistent'):", test.remove('nonexistent'));

console.log("\n--- Testing length() ---");
console.log("Current length:", test.length());

console.log("\n--- Testing keys(), values(), entries() ---");
console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries (first 3):", test.entries().slice(0, 3));
console.log("Total entries count:", test.entries().length);

console.log("\n--- Testing clear() ---");
test.clear();
console.log("Length after clear:", test.length());
console.log("Capacity after clear:", test.capacity);
console.log("keys() after clear:", test.keys());
console.log("has('apple') after clear:", test.has('apple'));

console.log("\n=== All Tests Completed Successfully ===");

