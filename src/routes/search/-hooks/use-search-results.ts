import { queryOptions } from "@tanstack/react-query";
import { Api } from "@/lib/axios";
import type { GetSearchResults } from "@/types/api";

export async function getSearchResults(
	query: string,
): Promise<GetSearchResults[]> {
	const res = await Api.get<GetSearchResults[]>("/search", {
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
