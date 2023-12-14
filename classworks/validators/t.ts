function t(text: string, data: Record<string, unknown>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return Object.hasOwn(data, key) ? String(data[key]) : match;
  });
}
