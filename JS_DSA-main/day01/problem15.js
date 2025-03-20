function rhombusPattern(n) {
  for (let i = 0; i <= n; i++) {
      let bag = "";

      // Add spaces for alignment
      for (let j = 0; j < n - i; j++) {
          bag += "  ";
      }

      // Add increasing numbers
      for (let j = 0; j <= i; j++) {
          bag += j + " ";
      }

      // Add decreasing numbers
      for (let j = i - 1; j >= 0; j--) {
          bag += j + " ";
      }

      console.log(bag);
  }

  for (let i = n - 1; i >= 0; i--) {
      let bag = "";

      // Add spaces for alignment
      for (let j = 0; j < n - i; j++) {
          bag += "  ";
      }

      // Add increasing numbers
      for (let j = 0; j <= i; j++) {
          bag += j + " ";
      }

      // Add decreasing numbers
      for (let j = i - 1; j >= 0; j--) {
          bag += j + " ";
      }

      console.log(bag);
  }
}

// Test the function with n = 2
let n = 3;
rhombusPattern(n);
