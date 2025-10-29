import { queryOptions } from "@tanstack/react-query";
import { Api } from "@/lib/axios";
import type { GetEntryOutput } from "@/types/api";

export async function getSearchResults(
	query: string,
): Promise<GetEntryOutput[]> {
	const res = await Api.get<GetEntryOutput[]>("/search", {
		params: {
			q: query,
		},
	});

	return res.data;
}

export function useSearchResultsOptions(query: string) {
	return queryOptions({
		queryKey: ["search", query],
		queryFn: async () => getSearchResults(query),
	});
}
