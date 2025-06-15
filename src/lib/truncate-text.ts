export function truncateText(text: string, size: number): string {
    if (!text) return "";
    const words = text.trim().split(/\s+/);
    if (words.length <= size) {
        return text;
    }
    return words.slice(0, size).join(" ") + "..";
}