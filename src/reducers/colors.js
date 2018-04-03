import ActionTypes from "../actions/ActionTypes";

const initialState = {
  walls: {
    wallSide: "hsla(0,0%,0%,1)",
    wallBack: "hsla(0,0%,0%,1)",
    floor: "hsla(0,0%,0%,1)"
  },
  rug: {
    rug: "hsla(0,0%,0%,0)",
    shadow: "hsla(0,0%,0%,0)"
  },
  window: {
    windowPane: "hsla(0,0%,0%,0)",
    windowGlareShadowLight: "hsla(0,0%,0%,0)",
    shadowDark: "hsla(0,0%,0%,0)",
    windowFrame: "hsla(0,0%,0%,0)"
  },
  dresser: {
    front: "hsla(0,0%,0%,0)",
    topBorder: "hsla(0,0%,0%,0)",
    drawer: "hsla(0,0%,0%,0)",
    knob: "000000"
  },
  table: {
    tableFront: "hsla(0,0%,0%,0)",
    tableBack: "hsla(0,0%,0%,0)",
    tableTop: "hsla(0,0%,0%,0)",
    tableLeft: "hsla(0,0%,0%,0)",
    lampBase: "hsla(0,0%,0%,0)",
    lampString: "hsla(0,0%,0%,0)",
    lampShade: "hsla(0,0%,0%,0)",
    lampShadow: "hsla(0,0%,0%,0)"
  },
  decorations: {
    pictureBg: "hsla(0,0%,0%,0)",
    colorLight: "hsla(0,0%,0%,0)",
    colorMed: "hsla(0,0%,0%,0)",
    colorDark: "hsla(0,0%,0%,0)",
    frames: "hsla(0,0%,0%,0)"
  },
  bed: {
    bedWrinkles: "hsla(0,0%,0%,0)",
    blanketFront: "hsla(0,0%,0%,0)",
    blanketTop: "hsla(0,0%,0%,0)",
    pillowFront: "hsla(0,0%,0%,0)",
    pillowBack: "hsla(0,0%,0%,0)",
    mattressFront: "hsla(0,0%,0%,0)",
    mattressTop: "hsla(0,0%,0%,0)",
    bedLegs: "hsla(0,0%,0%,0)",
    backboardFront: "hsla(0,0%,0%,0)",
    backboardShadow: "hsla(0,0%,0%,0)",
    bedShadowLight: "hsla(0,0%,0%,0)",
    bedShadowDark: "hsla(0,0%,0%,0)"
  }
};

export default (state = initialState, action) => {
  return initialState;
};
