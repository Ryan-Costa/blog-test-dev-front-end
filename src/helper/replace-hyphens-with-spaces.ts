const replaceHyphensWithSpaces = (slug: string) => {
  return slug.replace(/-/g, ' ');
};

export default replaceHyphensWithSpaces;
