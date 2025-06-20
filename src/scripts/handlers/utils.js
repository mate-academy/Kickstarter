export const getBreakpoint = () => {
  const width = window.innerWidth;
  if (width >= 1280) return 'desktop';
  if (width >= 780) return 'tablet';
  return 'mobile';
}
