/** Licensed photography (Unsplash License: free for commercial use). Generated from Unsplash downloads. */
export type Photo = {
  /** Path prefix; files exist as -1600/-800 .avif and .webp */
  src: string;
  width: number;
  height: number;
  alt: string;
  credit: { name: string; url: string };
};

export const photos = {
  mortgage: {
    src: "/images/mortgage",
    width: 1600,
    height: 1067,
    alt: "Modern two-storey family home with timber cladding and a landscaped lawn",
    credit: {
      name: "Alef Morais",
      url: "https://unsplash.com/photos/hPu2n_SfV7Q"
    }
  },
  banking: {
    src: "/images/banking",
    width: 1600,
    height: 1067,
    alt: "Classical stone bank building with tall columns seen from below",
    credit: {
      name: "Etienne Martin",
      url: "https://unsplash.com/photos/2_K82gx9Uk8"
    }
  },
  insurance: {
    src: "/images/insurance",
    width: 1600,
    height: 1067,
    alt: "Insurance policy document under a magnifying glass beside banknotes",
    credit: {
      name: "Vlad Deep",
      url: "https://unsplash.com/photos/mCqi3MljC4E"
    }
  },
  platform: {
    src: "/images/platform",
    width: 1600,
    height: 900,
    alt: "Operations team discussing work around a desk with a monitor",
    credit: {
      name: "Vitaly Gariev",
      url: "https://unsplash.com/photos/Cnsh9WwhVCw"
    }
  },
  contact: {
    src: "/images/contact",
    width: 1600,
    height: 900,
    alt: "Two professionals shaking hands across a desk in a bright office",
    credit: {
      name: "Vitaly Gariev",
      url: "https://unsplash.com/photos/jEpZNyFSQwQ"
    }
  },
  team: {
    src: "/images/team",
    width: 1600,
    height: 900,
    alt: "Four financial services professionals talking in an office lobby",
    credit: {
      name: "Vitaly Gariev",
      url: "https://unsplash.com/photos/KbEc5BWXX58"
    }
  },
  review: {
    src: "/images/review",
    width: 1600,
    height: 900,
    alt: "Two colleagues reviewing a printed document together",
    credit: {
      name: "Vitaly Gariev",
      url: "https://unsplash.com/photos/8k5j5z6ZYT4"
    }
  },
  security: {
    src: "/images/security",
    width: 1600,
    height: 1067,
    alt: "Glass office towers in a financial district seen from street level",
    credit: {
      name: "Sean Pollock",
      url: "https://unsplash.com/photos/PhYq704ffdA"
    }
  }
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;
