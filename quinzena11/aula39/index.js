function isOneEdit(stringA, stringB) {
if (Math.abs(stringB.length - stringA.length) > 1) return false

if (stringB.length > stringA.length) return stringB.includes(strA)

let charsDiffCount = 0
for (let i = 0; i < stringA.length; i++) {
    if (stringA[i] !== stringB[i]) charsDiffCount++
}

return charsDiffCount === 1
}