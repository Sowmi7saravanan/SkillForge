const questions = {

  Arrays: [

    {
      id: 1,

      title: "Find the largest element in an array",

      description:
        "Given an array of integers, find and return the largest element.",

      timeLimit: 10,

      example:
`Input: [3, 7, 2, 9, 4]
Output: 9`,

      hint:
        "Start with the first element as the largest and compare it with every other element.",

      // C
      cFunction:
`int solve(int arr[], int n) {

    // Write your solution here

}`,

      // C++
      cppFunction:
`int solve(vector<int> arr) {

    // Write your solution here

}`,

      // Python
      pythonFunction:
`def solve(arr):

    # Write your solution here

    pass`,

      // Hidden test cases
      testCases: [
        {
          input: [3, 7, 2, 9, 4],
          expectedOutput: 9
        },
        {
          input: [10, 5, 8, 2],
          expectedOutput: 10
        },
        {
          input: [-5, -2, -10],
          expectedOutput: -2
        }
      ]
    },

    {
      id: 2,

      title: "Find the second largest element",

      description:
        "Given an array of integers, find the second largest element.",

      timeLimit: 12,

      example:
`Input: [10, 5, 8, 2]
Output: 8`,

      hint:
        "Keep track of both the largest and second largest values.",

      cFunction:
`int solve(int arr[], int n) {

    // Write your solution here

}`,

      cppFunction:
`int solve(vector<int> arr) {

    // Write your solution here

}`,

      pythonFunction:
`def solve(arr):

    # Write your solution here

    pass`,

      testCases: [
        {
          input: [10, 5, 8, 2],
          expectedOutput: 8
        },
        {
          input: [5, 1, 9, 7],
          expectedOutput: 7
        }
      ]
    }

  ]

};

module.exports = questions;