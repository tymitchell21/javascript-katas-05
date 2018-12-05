function reverseAString(str) {
    return str.split('').reverse().join('')
}

console.assert(reverseAString('hello my name is tyler') === 'relyt si eman ym olleh'),{
    'function': reverseAString('hello my name is tyler'),
    'expected': 'relyt si eman ym olleh'
}

console.assert(reverseAString('hello dawg') === 'gwad olleh'),{
    'function': reverseAString('hello dawg'),
    'expected': 'gwad olleh'
}

function reverseASentence(sentence) {
    return sentence.split(' ').reverse().join(' ')
}

console.assert(reverseASentence('hello my name is tyler') === 'tyler is name my hello'),{
    'function': reverseASentence('hello my name is tyler'),
    'expected': 'tyler is name my hello'
}

console.assert(reverseASentence('hello dawg') === 'dawg hello'),{
    'function': reverseASentence('hello dawg'),
    'expected': 'dawg hello'
}

function minValue (array) {
    return Math.min(...array)
}

console.assert(minValue([1,5,10,67,12,5]) === 1),{
    'function': minValue([1,5,10,67,12,5]),
    'expected': 1
}

let array = [100,3,12,37,15,5]

console.assert(minValue(array) === 3),{
    'function': minValue(array),
    'expected': 3
}

function maxValue (array) {
    return Math.max(...array)
}

console.assert(maxValue([1,5,10,67,12,5]) === 67),{
    'function': maxValue([1,5,10,67,12,5]),
    'expected': 67
}

console.assert(maxValue(array) === 100),{
    'function': maxValue(array),
    'expected': 100
}

function calculateRemainder (numerator, denominator) {
    return numerator%denominator
}

console.assert(calculateRemainder(5,2) === 1),{
    'function': calculateRemainder(5,2),
    'expected': 1
}

console.assert(calculateRemainder(6,2) === 0),{
    'function': calculateRemainder(6,2),
    'expected': 0
}

function duplicates (array) {
    let ans = []
    array.map (x => {
        if (ans.indexOf(x) === -1) ans.push(x)
    })
    return ans.join(' ')
}

console.assert(duplicates([1,5,2,6,7,1,3,2,4,5,3,8]) === '1 5 2 6 7 3 4 8'),{
    'function': duplicates([1,5,2,6,7,1,3,2,4,5,3,8]),
    'expected': "1 5 2 6 7 3 4 8"
}

console.assert(duplicates([1,2,3,4,5,6]) === '1 2 3 4 5 6'),{
    'function': duplicates([1,2,3,4,5,6]),
    'expected': "1 2 3 4 5 6"
}

function duplicateCounts (array) {
    let obj = {}
    array.map (x => {
        if (!obj[x]) {
            obj[x]=1
        } else {
            obj[x]++
        }
    })
    return JSON.stringify(obj)
}

console.assert(duplicateCounts([1,5,2,6,7,1,3,2,4,5,3,8]) === JSON.stringify({1: 2, 2: 2, 3: 2, 4: 1, 5: 2, 6: 1, 7: 1, 8: 1})),{
    'function': duplicateCounts([1,5,2,6,7,1,3,2,4,5,3,8]),
    'expected': JSON.stringify({1: 2, 2: 2, 3: 2, 4: 1, 5: 2, 6: 1, 7: 1, 8: 1})
}

console.assert(duplicateCounts([1,2,3,4,5,6]) === JSON.stringify({1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1})),{
    'function': duplicateCounts([1,2,3,4,5,6]),
    'expected': JSON.stringify({1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1})
}

function evaluateExpression (str, obj) {
    str = str.split(" ")
    let addMinus = true
    let sum=0

    str.map (x => {
        if (obj[x]) {
            if (addMinus) sum+=parseInt(obj[x])
            else sum-=parseInt(obj[x])
        } else {
            if (x === '+' && addMinus == false) addMinus=!addMinus
            else if (x === '-' && addMinus == true) addMinus=!addMinus
        }
    })
    return sum
}
   
console.assert(evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) === -3)
console.assert(evaluateExpression("d - b - c - a", {a: 5, b: 2, c: 4, d: 25}) === 14)