module.exports = {
    transform: {
        "^.+\\.ts?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.json",
            },
        ],
    },
    testEnvironment: "node",
    testRegex: "/tests/.*/.*\\.(test|spec)?\\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    setupFiles: ["./tests/utils/helpers.ts"],
};
