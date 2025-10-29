/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** GetEntry */
export interface GetEntryInput {
	/** Id */
	id: number;
	/** Kanji Forms */
	kanji_forms: GetKanji[];
	/** Readings */
	readings: GetReading[];
	/** Senses */
	senses: GetSense[];
}

/** GetEntry */
export interface GetEntryOutput {
	/** Id */
	id: number;
	/** Kanji Forms */
	kanji_forms: GetKanji[];
	/** Readings */
	readings: GetReading[];
	/** Senses */
	senses: GetSense[];
}

/** GetGloss */
export interface GetGloss {
	/** Text */
	text: string;
	/** Lang */
	lang: string;
}

/** GetKanji */
export interface GetKanji {
	/** Text */
	text: string;
	/** Priorities */
	priorities: string[];
}

/** GetReading */
export interface GetReading {
	/** Text */
	text: string;
	/** No Kanji */
	no_kanji: boolean;
	/** Priorities */
	priorities: string[];
}

/** GetSense */
export interface GetSense {
	/** Pos */
	pos: string[];
	/** Glosses */
	glosses: GetGloss[];
}
