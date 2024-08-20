export function paginate<T>(
  data: T[],
  currentPage: number,
  itemsPerPage: number
): T[] {
  // calculate the start and end index
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // slice the data array to get only the data for the current page
  return data.slice(startIndex, endIndex);
}
