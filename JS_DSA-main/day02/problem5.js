function runProgram(input) {
    let result = solve(input.trim());
    console.log(result);
}

function solve(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {  // Regular for loop
        let char = str[i];

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return "unbalanced";
            }

            let top = stack.pop();

            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return "unbalanced";
            }
        }
    }

    return stack.length === 0 ? "balanced" : "unbalanced";
}

// Example usage
runProgram("{[()]}");  // Output: balanced
runProgram("{[(])}");  // Output: unbalanced
