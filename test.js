import { HashMap } from './hashmap.js';

const map = new HashMap();

console.log("--- Initial State ---");
console.log("Length:", map.length()); // Should be 0

console.log("\n--- Testing set() ---");
map.set('Carlos', 'Value1');
map.set('Carla', 'Value2');
console.log("Set 'Carlos' and 'Carla'.");
console.log("Length:", map.length()); // Should be 2

console.log("\n--- Testing get() ---");
console.log("get('Carlos'):", map.get('Carlos')); // Value1
console.log("get('Carla'):", map.get('Carla')); // Value2
console.log("get('Unknown'):", map.get('Unknown')); // null

console.log("\n--- Testing has() ---");
console.log("has('Carlos'):", map.has('Carlos')); // true
console.log("has('Unknown'):", map.has('Unknown')); // false

console.log("\n--- Testing remove() ---");
console.log("remove('Carlos'):", map.remove('Carlos')); // true
console.log("has('Carlos') after remove:", map.has('Carlos')); // false
console.log("Length after remove:", map.length()); // 1
console.log("remove('Unknown'):", map.remove('Unknown')); // false

console.log("\n--- Testing clear() ---");
map.clear();
console.log("Length after clear:", map.length()); // 0
console.log("has('Carla') after clear:", map.has('Carla')); // false

console.log("\n--- Testing Collision and Resize Preservation ---");
// Re-populate to trigger resize
// We know from previous test that 16 items trigger resize (capacity 16 -> 32)
for (let i = 0; i < 20; i++) {
    map.set(`key${i}`, `value${i}`);
}
console.log("Added 20 items.");
console.log("Length:", map.length());
console.log("Capacity:", map.capacity); // Should be 32

// Check if items are still retrievable
console.log("get('key0'):", map.get('key0')); // value0
console.log("get('key19'):", map.get('key19')); // value19

console.log("\n--- Testing keys(), values(), entries() ---");
map.clear();
map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('grape', 'purple');

console.log("Keys:", map.keys());
console.log("Values:", map.values());
console.log("Entries:", map.entries());
console.log("Note: Order may not match insertion order (this is expected).");

