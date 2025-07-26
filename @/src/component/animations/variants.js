export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.3
    }
  }
};

export const scrollVariants = {
  hidden: {
    opacity: 0,
    y: 75
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const textRevealVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const buttonVariants = {
  rest: {
    scale: 1,
    backgroundColor: "#d4a373"
  },
  hover: {
    scale: 1.05,
    backgroundColor: "#b8865b",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

export const navVariants = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

export const navItemVariants = {
  hidden: {
    y: -20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    y: -2,
    color: "#d4a373",
    transition: {
      duration: 0.2
    }
  }
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.2
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const sectionVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

export const sectionItemVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideFromLeftVariants = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideFromRightVariants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const titleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const indicatorVariants = {
  inactive: {
    scale: 1,
    backgroundColor: "#ddd"
  },
  active: {
    scale: 1.3,
    backgroundColor: "#d4a373",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  hover: {
    scale: 1.2,
    backgroundColor: "#d4a373",
    transition: {
      duration: 0.2
    }
  }
};

export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  })
};
