export function getResultLevel(score: number) {
  if (score >= 0 && score <= 15) {
    return "Starter level";
  } else if (score >= 15 && score <= 30) {
    return "Elementary Unit 1";
  } else if (score >= 31 && score <= 50) {
    return "Elementary Unit 7";
  } else if (score >= 51 && score <= 75) {
    return "Pre-intermediate Unit 1";
  } else if (score >= 76 && score <= 100) {
    return "Pre-intermediate Unit 7";
  } else if (score >= 101 && score <= 125) {
    return "Intermediate Unit 1";
  } else if (score >= 126 && score <= 150) {
    return "Intermediate Unit 6";
  } else if (score >= 151 && score <= 170) {
    return "Upper Intermediate Unit 1";
  } else if (score >= 171 && score <= 185) {
    return "Upper Intermediate Unit 6";
  } else {
    return "Advanced level";
  }
}
