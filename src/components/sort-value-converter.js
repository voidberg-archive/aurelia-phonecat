export class SortValueConverter {
  toView(array, config) {
    var directionFactor = config.direction === 'ascending' ? 1 : -1,
        comparer = this[config.type + 'Comparison'];

    if (config.property === undefined) {
      return array.slice(0).sort((a, b) => {
        return comparer(a, b) * directionFactor;
      });
    }

    return array.slice(0).sort((a, b) => {
      return comparer(a[config.property], b[config.property]) * directionFactor;
    });
  }

  stringComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
  }

  numberComparison(a, b) {
    if ((a === null || a === undefined) && (b === null || b === undefined))
      return 0;
    if (a === null || a === undefined)
      return -1;
    if (b === null || b === undefined)
      return 1;
    return a - b;
  }
}
