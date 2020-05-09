type Selector =
  | 'LEFT_CELL_SELECTOR'
  | 'RIGHT_CELL_SELECTOR'
  | 'CENTER_UP_CELL_SELECTOR'

const selectorMap = new Map<Selector, string>([
  ['CENTER_UP_CELL_SELECTOR', '.isitanggal.hitam.tengahbawah'],
  [
    'LEFT_CELL_SELECTOR',
    'table.kalenderCellDetail tr:nth-child(2) .isitanggal.hitam.kiri',
  ],
  [
    'RIGHT_CELL_SELECTOR',
    'table.kalenderCellDetail tr:nth-child(2) .isitanggal.hitam.kanan',
  ],
])

export const getSelector = (key: Selector) => selectorMap.get(key)
