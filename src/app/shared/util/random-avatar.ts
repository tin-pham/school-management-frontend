function generateHash(input: string): string {
  let hash = 0,
    i,
    chr;
  if (input.length === 0) return hash.toString();
  for (i = 0; i < input.length; i++) {
    chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString();
}

export function getGravatarUrl(id: any, salt: string): string {
  const inputForHash = `${id}-${salt}`;
  const hash = generateHash(inputForHash);
  return `http://www.gravatar.com/avatar/${hash}?d=identicon`;
}
