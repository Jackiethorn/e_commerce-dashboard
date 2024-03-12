type Row = {
  original: Record<string, unknown>;
};

export const sortNumbersAndLetters = <T extends Row>(
  rowA: T,
  rowB: T,
  columnId: string
): number => {
  const valueA = rowA.original[columnId];
  const valueB = rowB.original[columnId];

  if (typeof valueA === "number" && typeof valueB === "number") {
    return valueA - valueB; // numeric sorting
  }

  // Fallback to alphanumeric sorting for non-numeric values
  return String(valueA).localeCompare(String(valueB));
};
