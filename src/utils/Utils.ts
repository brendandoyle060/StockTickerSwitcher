export class Utils {
    /**
     * Removes large chunks of whitespace from a given string,
     * replacing each with just a single space.
     * @param str - text which contains excess whitespace
     * @returns string with excess whitespace removed
     */
    removeExtraWhitespace(str: string): string {
        let regex = new RegExp("\\s+");
        let split = str.split(regex);
        let full = "";
        split.forEach(function (word) {
            full = full + word.trim() + " ";
        });
        // Get rid of the one extra space at the end before we return
        return full.trim();
    }
}
