export function toPillarSlug(pillar: string): string {
  return pillar
    .toLowerCase()
    .replace(/[&\/]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
