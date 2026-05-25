export function buildTallyEmbedUrl(tallyUrl, email) {
  if (!email || typeof email !== 'string') {
    return tallyUrl;
  }
  const trimmed = email.trim();
  if (!trimmed) {
    return tallyUrl;
  }
  const separator = tallyUrl.includes('?') ? '&' : '?';
  return `${tallyUrl}${separator}email=${encodeURIComponent(trimmed)}`;
}

export const deleteAccountTallyUrl = 'https://tally.so/r/zx1G9q';
