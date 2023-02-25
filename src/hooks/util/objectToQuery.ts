export const objectToQuery = (obj: Record<string, unknown>) => {
  const keys = Object.keys(obj);
  const queryList = keys.filter((key) => obj[key]).map((key) => `${key}=${obj[key]}`);
  return queryList.join('&');
};
