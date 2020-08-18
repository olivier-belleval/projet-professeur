import slugify from 'slugify';

export const slugifyTitle = (title) => {
  return `/${slugify(title, { strict: true, lower: true })}`
}
