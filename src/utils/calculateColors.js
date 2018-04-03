const toHSLA = color => {
  return `hsla(${color.hue}, ${color.saturation}%, ${color.lightness}%, ${
    color.alpha
  })`;
};

const constrain = color => {
  return Math.max(0, Math.min(Math.ceil(color), 100));
};

const walls = baseColor => {
  const wallSide = toHSLA(baseColor);
  const floor = toHSLA({
    ...baseColor,
    saturation: constrain(baseColor.saturation * 0.75),
    lightness: constrain(baseColor.lightness * 0.7)
  });
  const wallBack = toHSLA({
    ...baseColor,
    saturation: constrain(baseColor.saturation * 1.2),
    lightness: constrain(baseColor.lightness * 1.15)
  });

  return { wallSide, wallBack, floor };
};

const rug = baseColor => {
  const rug = toHSLA(baseColor);
  const shadow = toHSLA({
    ...baseColor,
    saturation: constrain(baseColor.saturation * 1.1),
    lightness: constrain(baseColor.lightness * 0.85)
  });

  return { rug, shadow };
};

const windowAndLight = baseColor => {
  const windowPane = toHSLA(baseColor);
  const windowGlareShadowLight = toHSLA({
    ...baseColor,
    saturation: constrain(baseColor.saturation * 0.9),
    lightness: constrain(baseColor.lightness * 1.1)
  });
  const shadowDark = toHSLA({
    ...baseColor,
    alpha: baseColor.alpha * 0.75
  });
  const windowFrame = toHSLA({
    ...baseColor,
    saturation: constrain(baseColor.saturation * 0.3),
    lightness: constrain(baseColor.lightness * 0.65)
  });

  return { windowPane, windowGlareShadowLight, shadowDark, windowFrame };
};

export default {
  walls,
  rug,
  windowAndLight
};
