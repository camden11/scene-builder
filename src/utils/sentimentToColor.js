export default results => {
  const { emotion, sentiment } = results;
  const r = Math.ceil(emotion.anger * 255);
  const g = Math.ceil(emotion.joy * 255);
  const b = Math.ceil(emotion.sadness * 255);
  const a = 1 - emotion.fear;
  return `rgba(${r},${g},${b},${a})`;
};
