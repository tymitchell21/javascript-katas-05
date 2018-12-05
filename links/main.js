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