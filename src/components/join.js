export class JoinValueConverter {
  toView(input, separator = ', ') {
    if (!input || !Array.isArray(input)) {
      return '';
    }

    return input.join(separator);
  }
}