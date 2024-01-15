function getRandomHexColor() {
  // Generuje losową liczbę całkowitą z zakresu od 0 do 16777215 (0xFFFFFF).
  const randomColor = Math.floor(Math.random() * 16777215);

  // Konwertuje liczbę na szesnastkowy format i dodaje brakujące zera z przodu, jeśli to konieczne.
  const hexColor = randomColor.toString(16).padStart(6, '0');

  // Zwraca kolor w formacie "#RRGGBB".
  return `#${hexColor}`;
}

export default getRandomHexColor;
