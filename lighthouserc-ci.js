module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 3,
      url: [
        "http://localhost:3000",
        "http://localhost:3000/left-sidebar",
        "http://localhost:3000/right-sidebar",
        "http://localhost:3000/no-sidebar",
      ],
      // chromePath: '/usr/bin/google-chrome', // WSL
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.8 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
