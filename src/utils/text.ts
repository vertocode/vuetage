import {RenderFilteredTextParams} from "@/typing/Utils";

export const renderFilteredText = (params: RenderFilteredTextParams): string => {
    const {
        text = '',
        autoFilter = false,
        textField = ''
    } = params || {}

    if (!autoFilter || !textField) {
        return text;
    }

    const filterText = textField.toLowerCase();
    const startIndex = text.toLowerCase().indexOf(filterText);

    if (startIndex !== -1) {
        const endIndex = startIndex + filterText.length;
        const boldText = `<strong>${text.substring(startIndex, endIndex)}</strong>`;
        return text.substring(0, startIndex) + boldText + text.substring(endIndex);
    }

    return text
}