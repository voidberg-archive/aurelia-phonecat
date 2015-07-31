export class CheckmarkValueConverter {
  toView(input) {
    return input ? '\u2713' : '\u2718';
  }
}