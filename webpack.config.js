const path = require("path");

module.exports = {
    entry: {
        Site: "./src/sites/Site.ts",
        TickerType: "./src/tickers/TickerType.ts",
        Ticker: "./src/tickers/Ticker.ts",
        Robinhood: "./src/sites/Robinhood.ts",
        YahooFinance: "./src/sites/YahooFinance.ts",
        contentScript: "./src/contentScripts/contentScript.ts",
        serviceWorker: "./src/serviceWorkers/serviceWorker.ts",
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};
