export const rgbaToRgb = (rgba: string, alpha: number): string => {
  const [r, g, b] = rgba.match(/\d+/g)!.map(Number)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
