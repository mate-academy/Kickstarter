export const getBreakpoint = () => {
  const width = window.innerWidth;
  if (width > 1280) return 'desktop';
  if (width > 680) return 'tablet';
  return 'mobile';
}
