module.exports = function ({ src, width, quality }) {
  const params = [`w=${width}`];
  if (quality) {
    params.push(`q=${quality}`);
  }
  return `${src}?${params.join('&')}`;
};