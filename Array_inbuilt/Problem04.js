// ✅ Step 4: Search in Array

let colors = ['red', 'green', 'blue'];

colors.includes('red');        // true
colors.indexOf('green');       // 1
colors.find(c => c.length > 4); // 'green'
colors.findIndex(c => c === 'blue'); // 2
