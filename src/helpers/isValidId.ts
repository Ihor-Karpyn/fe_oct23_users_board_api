export const isValidId = (id: any) => {
  if (typeof id !== 'number') {
    return false;
  }

  if (Number.isNaN(id) || !isFinite(id) || id < 0) {
    return false;
  }

  return true;
}
