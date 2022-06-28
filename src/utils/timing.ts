export const easeInExpo = (
  time: number,
  startValue: number,
  endValue: number,
  duration: number,
) => {
  return time === duration
    ? startValue + endValue
    : endValue * (-Math.pow(2, (-10 * time) / duration) + 1) + startValue
}
