import fs from "fs";
import path from "path";

export function getDoc(sitename: string, filename: string) {
    let html = fs.readFileSync(
        path.resolve(
            __dirname,
            `../resources/sites/${sitename}/${filename}.html`
        ),
        "utf8"
    );

    return html;
}
