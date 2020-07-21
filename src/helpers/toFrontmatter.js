const toFrontmatter = array => {
  return {
    edges: array.map(el => {
      return {
        node: {
          frontmatter: el,
        },
      }
    }),
  }
}

export default toFrontmatter
