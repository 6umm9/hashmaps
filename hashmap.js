export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }

    set(key, value) {
        const code = this.hash(key);
        const index = code % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }

        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value;
                return;
            }
        }

        bucket.push({ key, value });
        this.size++;

        if (this.size > this.capacity * this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        const code = this.hash(key);
        const index = code % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (bucket) {
            for (const entry of bucket) {
                if (entry.key === key) {
                    return entry.value;
                }
            }
        }
        return null;
    }

    has(key) {
        const code = this.hash(key);
        const index = code % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (bucket) {
            for (const entry of bucket) {
                if (entry.key === key) {
                    return true;
                }
            }
        }
        return false;
    }

    remove(key) {
        const code = this.hash(key);
        const index = code % this.capacity;

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i].key === key) {
                    bucket.splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    keys() {
        const keysArray = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                for (const entry of bucket) {
                    keysArray.push(entry.key);
                }
            }
        }
        return keysArray;
    }

    values() {
        const valuesArray = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                for (const entry of bucket) {
                    valuesArray.push(entry.value);
                }
            }
        }
        return valuesArray;
    }

    entries() {
        const entriesArray = [];
        for (const bucket of this.buckets) {
            if (bucket) {
                for (const entry of bucket) {
                    entriesArray.push([entry.key, entry.value]);
                }
            }
        }
        return entriesArray;
    }

    resize() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity);
        this.size = 0;

        for (const bucket of oldBuckets) {
            if (bucket) {
                for (const { key, value } of bucket) {
                    this.set(key, value);
                }
            }
        }
    }
}
