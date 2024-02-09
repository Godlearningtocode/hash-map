#!/usr/bin/env node

const { has } = require("0g");

function HashSet() {
    let hashSetSize = 16;

    let hashSet = Array(hashSetSize).fill(null).map(() => []);
    const gethashSet = () => hashSet;

    function hash(key) {
        let hashCode = 0;

        let primeNumber = 31;

        for(let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % hashSetSize
        }

        return hashCode - 1;
    }

    function checkLoad() {
        let hashLoad = 0;

        for(let i = 0; i < hashSet.length; i++) {
            if(hashSet[i][0]) {
                hashLoad += 1;
            }
        }

        if(((hashLoad / hashSetSize)) >= 0.7) {
            console.log(1)
            return hashSetSize *= 2;
        }

        return
    }

    function set(key) {

        checkLoad();
        const hashedKey = hash(key);
        const collision = hashSet[hashedKey].findIndex((element) => element.key === key);

        if(collision === -1) hashSet[hashedKey].push({key});

        return hashSet[hashedKey]
    }

    function get(key) {
        const hashedKey = hash(key);
        if(!hashSet[hashedKey][0]) return null
        return hashSet[hashedKey].find((element) => element.key === key).key;
    }

    function has(key) {
        const hashedKey = hash(key);
        if(!hashSet[hashedKey][0]) return false;
        if(hashSet[hashedKey][0].key) return true;
    }

    function remove(key) {
        const hashedKey = hash(key);
        if(!hashSet[hashedKey][0]) return false;
        if(hashSet[hashedKey][0].key === key) {
            hashSet[hashedKey].shift();
            return true;
        }
    }

    function length() {
        let storedKeys = 0
        for(let i = 0; i < hashSet.length; i++) {
            if(hashSet[i].length) {
                storedKeys += hashSet[i].length;
            }
        }

        return storedKeys;
    }

    function clear() {
        hashSet.forEach((element) => element.splice(0));
    }

    function keys() {
        let keysArray = [];
        for(let i = 0; i < hashSet.length; i++) {
            if(hashSet[i][0]) {
                hashSet[i].forEach((element) => keysArray.push(element.key))
            }
        }

        return keysArray
    }

    function values() {
        let valuesArray = [];
        for(let i = 0; i < hashSet.length; i++) {
            if(hashSet[i][0]) {
                hashSet[i].forEach((element) => valuesArray.push(element.value))
            }
        }

        return valuesArray
    }

    function enteries() {
        let enteriesArray = [];
        for(let i = 0; i < hashSet.length; i++) {
            if(hashSet[i][0]) {
                hashSet[i].forEach((element) => enteriesArray.push(element))
            }
        }

        return enteriesArray;
    }

    return {
        hash, set, get, has, remove, length, clear, keys, values, enteries
    }
}


let hash1 = new HashSet()

console.log(hash1.hash('a'));
console.log(hash1.set('1', 'a'));
console.log(hash1.set('1', 'b'));
console.log(hash1.get('1'));
console.log(hash1.has('1'))
console.log(hash1.remove('1'))
console.log(hash1.set('1', 'a'));
console.log(hash1.set('a', 'b'));
console.log(hash1.set('1', '1'))
console.log(hash1.length())
console.log(hash1.set('3', '3'))
console.log(hash1.keys());
console.log(hash1.values());
console.log(hash1.enteries());
hash1.set('2');
hash1.set('4');
hash1.set('5');
hash1.set('6');
hash1.set('7');
hash1.set('8');
hash1.set('9');
hash1.set('m');
hash1.set('n');
hash1.set('o');
hash1.set('p');
hash1.set('j');
hash1.set('k');
hash1.set('l');