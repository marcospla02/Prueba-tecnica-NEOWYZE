export const showAttribute = (value: string | number | undefined): boolean => {
    return !!value && value !== "n/a" && value !== "unknown";
  };