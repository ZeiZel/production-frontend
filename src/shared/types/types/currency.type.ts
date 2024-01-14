export enum CurrLabel {
	USD = 'USD',
	RUR = 'RUR',
	EUR = 'EUR',
	CNY = 'CNY',
}

export enum CurrCode {
	USD = '840',
	RUR = '810',
	EUR = '978',
	CNY = '156',
}

export enum CurrSymbol {
	RUR = '₽',
	USD = '$',
	EUR = '€',
	CNY = '¥',
}

export const Symbols: Record<CurrSymbol, CurrCode> = {
	[CurrSymbol.RUR]: CurrCode.RUR,
	[CurrSymbol.USD]: CurrCode.USD,
	[CurrSymbol.CNY]: CurrCode.CNY,
	[CurrSymbol.EUR]: CurrCode.EUR,
};
