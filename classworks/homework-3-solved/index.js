const CORNER_TOP_LEFT = '\u250C';
const CORNER_TOP_RIGHT = '\u2510';
const CORNER_BOTTOM_LEFT = '\u2514';
const CORNER_BOTTOM_RIGHT = '\u2518';
const SEPARATOR_TOP = '\u252C';
const SEPARATOR_MIDDLE = '\u253C';
const SEPARATOR_BOTTOM = '\u2534';
const SEPARATOR_LEFT = '\u251C';
const SEPARATOR_RIGHT = '\u2524';
const BORDER_HORIZONTAL = '\u2500';
const BORDER_VERTICAL = '\u2502';
const FILLER = '\u00A0';

function createTextTable(columns, data) {
  const padding = 3;
  const columnWidths = data.reduce((widths, data) => {
    for (const columnId of columns) {
      const dataLength = String(data[columnId]).length;
      widths[columnId] = Math.max(dataLength, widths[columnId] ?? 0);
    }

    return widths;
  }, {});

  return [
    generateTableBorder(CORNER_TOP_LEFT, CORNER_TOP_RIGHT, SEPARATOR_TOP, BORDER_HORIZONTAL, columns, columnWidths, padding),
    data
      .map((datum) => [
        BORDER_VERTICAL.padEnd(padding + 1, FILLER),
        columns
          .map((columnId) => {
            const value = datum[columnId];

            return String(value)[getPadFunction(value)](columnWidths[columnId], FILLER);
          })
          .join(`${
            FILLER.repeat(padding)
          }${BORDER_VERTICAL}${
            FILLER.repeat(padding)
          }`),
        BORDER_VERTICAL.padStart(padding + 1, FILLER),
      ].join(''))
      .join(`\n${
        generateTableBorder(SEPARATOR_LEFT, SEPARATOR_RIGHT, SEPARATOR_MIDDLE, BORDER_HORIZONTAL, columns, columnWidths, padding)
      }\n`),
    generateTableBorder(CORNER_BOTTOM_LEFT, CORNER_BOTTOM_RIGHT, SEPARATOR_BOTTOM, BORDER_HORIZONTAL, columns, columnWidths, padding),
  ].join('\n');

}


function generateTableBorder(start, end, separator, filler, columns, widths, padding = 0) {
  return [
    start.padEnd(padding + 1, filler),
    columns
      .map((columnId) => filler.repeat(widths[columnId]))
      .join(`${
        filler.repeat(padding)
      }${separator}${
        filler.repeat(padding)
      }`),
    end.padStart(padding + 1, filler),
  ].join('');
}

function getPadFunction(value) {
  switch (typeof value) {
    case 'number':
      return 'padStart';
    default:
      return 'padEnd';
  }
}
