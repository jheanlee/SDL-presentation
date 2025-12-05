export const paths = {
  root: {
    path: "/",
    getHref: () => "/",

    home: {
      path: "",
      getHref: () => "/",
    },

    presentation: {
      path: "presentation",
      getHref: () => "/presentation",
    },

    stall: {
      path: "stall",
      getHref: () => "/stall",
    },

    posters: {
      path: "posters",
      getHref: () => "/posters",
    },

    works: {
      path: "/works",
      getHref: () => "/works",

      biology: {
        path: "/biology",
        getHref: () => "/biology",
      },

      chemistry: {
        path: "/chemistry",
        getHref: () => "/chemistry",
      },

      engineering: {
        path: "/engineering",
        getHref: () => "/engineering",
      },

      medicine: {
        path: "/medicine",
        getHref: () => "/medicine",
      },

      politics_and_economics: {
        path: "/politics_and_economics",
        getHref: () => "/politics_and_economics",
      },

      society: {
        path: "/society",
        getHref: () => "/society",
      },
    },
  },
};
