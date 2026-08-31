/**
 * Helper to resolve asset URLs correctly across local dev, custom domains,
 * and GitHub Pages subdirectories (e.g. https://<user>.github.io/<repo>/)
 */
export const getAssetUrl = (path: string | undefined | null): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  
  // Strip leading slash if any
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In Vite, BASE_URL is './' or '/repo-name/'
  const baseUrl = import.meta.env.BASE_URL || './';
  
  if (baseUrl.endsWith('/')) {
    return `${baseUrl}${cleanPath}`;
  }
  return `${baseUrl}/${cleanPath}`;
};
