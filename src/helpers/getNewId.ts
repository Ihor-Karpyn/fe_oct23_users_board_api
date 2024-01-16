export const getNewId = (items: { id: number }[]) => {
  if (!items.length) {
    return 1;
  }

  const ids = items.map((item) => item.id);
  const maxId = Math.max(...ids);

  return maxId + 1;
}
