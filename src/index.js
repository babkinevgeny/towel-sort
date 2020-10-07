
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }

  const isMatrix =  Array.isArray(matrix[0]);

  if (!isMatrix) {
    return matrix;
  }
  
  const sortedMatrix = matrix.map((el, i) => {
    if ((i + 1) % 2 === 0) {
      el.reverse();
    }

    return el;
  });


  const flattenMatrix = sortedMatrix.flat();

  return flattenMatrix
}
