import fs from "node:fs/promises";
import { unraw } from "unraw";

async function main() {
    const jsonString = await fs.readFile(process.argv[2], "utf-8");
    let json = JSON.parse(jsonString) as {
        locale: string;
        languages: Record<string, string>;
    };

    const filteredEntries = Object.entries(json.languages).filter(([key, val]) => (key.length < 3) && !val.includes("_"))
    json.languages = Object.fromEntries(filteredEntries)

    await fs.writeFile(process.argv[2], JSON.stringify(json, null, 2));
}

main();