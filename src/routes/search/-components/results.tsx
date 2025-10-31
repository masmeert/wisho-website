import type { GetSearchResults } from "@/types/api";
import SearchResultCard from "./word-card";

type SearchResultsProps = {
	results: GetSearchResults[];
};

export function SearchResults({ results }: SearchResultsProps) {
	return (
		<div className="space-y-3">
			{results.map((result) => (
				<SearchResultCard key={result.id} result={result} />
			))}
		</div>
	);
}
