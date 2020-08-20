import slugify from 'slugify';

export const slugifyTitle = (title) => {
  return `/article/${slugify(title, { strict: true, lower: true })}`
}
