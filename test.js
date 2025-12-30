import { HashMap } from './hashmap.js';

const map = new HashMap();

console.log("Load Factor:", map.loadFactor);
console.log("Capacity:", map.capacity);
console.log("Buckets length:", map.buckets.length);

const key = "example";
const hashCode = map.hash(key);
console.log(`Hash code for '${key}':`, hashCode);

try {
    const outOfBoundsIndex = 500;
    if (outOfBoundsIndex < 0 || outOfBoundsIndex >= map.buckets.length) {
        throw new Error("Trying to access index out of bounds");
    }
} catch (e) {
    console.log(e.message);
}
