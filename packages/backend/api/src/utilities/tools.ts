
export const generateTeamSlug = (name:string): string => {
  return name
    .normalize("NFD")                 // Normalize to NFD Unicode form
    .replace(/[\u0300-\u036f]/g, "")  // Remove diacritics (accents)
    .toLowerCase()                    // Convert to lowercase
    .trim()                           // Trim whitespace from both sides
    .replace(/\s+/g, "-")             // Replace spaces with -
    .replace(/[^\w\-]+/g, "")         // Remove all non-word chars
    .replace(/\-\-+/g, "-");          // Replace multiple - with single -
};
