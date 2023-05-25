const weatherCodeToString: {
  [key: number]: {
    icon: string;
    label: string;
  };
} = {
  0: {
    icon: "c01d",
    label: "Clear sky",
  },
  1: {
    icon: "c02d",
    label: "Mainly clear",
  },

  2: {
    icon: "c03d",
    label: "Partly cloudy",
  },

  3: {
    icon: "c04d",
    label: "Overcast",
  },

  45: {
    icon: "c05d",
    label: "Fog",
  },
};

export default weatherCodeToString;
