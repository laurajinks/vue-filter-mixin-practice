export const TextMixin = {
    data() {
        return {
            text: "Laura"
        };
    },
    computed: {
        reversedText() {
            return this.text
                .split("")
                .reverse()
                .join("");
        },
        appendedText() {
            return `${this.text} (${this.text.length})`;
        }
    }
};
