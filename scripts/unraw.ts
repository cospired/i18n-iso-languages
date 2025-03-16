import fs from "node:fs/promises";
import { unraw } from "unraw";

async function main() {
    const jsonString = await fs.readFile(process.argv[2], "utf-8");
    const json = JSON.parse(jsonString) as {
        locale: string;
        languages: Record<string, string>;
    };

    for (const [key, value] of Object.entries(json.languages)) {
        const unrawed = unraw(value);
        json.languages[key] = unrawed;
    }

    await fs.writeFile(process.argv[2], JSON.stringify(json, null, 2));
}

main();