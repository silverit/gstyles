import colors from './colors';
export interface IShadows {
  sd1: object;
  sd2: object;
  sd3: object;
}
export const shadows = {
  sd1: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 20,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 40,

    elevation: 2,
  },

  sd2: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  sd3: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,

    elevation: 6,
  },
};
