import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import SearchBar from "@/components/search-bar";
import { SearchResults } from "./-components/results";
import { useSearchResultsOptions } from "./-hooks/use-search-results";

export const Route = createFileRoute("/search/$query")({
	component: SearchResultsPage,
	loader: async ({ params, context: { queryClient } }) =>
		queryClient.ensureQueryData(useSearchResultsOptions(params.query)),
});

function SearchResultsPage() {
	const { query } = Route.useParams();
	const { data } = useSuspenseQuery(useSearchResultsOptions(query));

	return (
		<main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			<div className="container mx-auto px-4 py-12 md:py-20">
				<div className="max-w-3xl mx-auto mb-12">
					<div className="flex items-center justify-center gap-2 mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-balance">
							Wisho
						</h1>
					</div>
					<SearchBar />
				</div>

				<div className="max-w-3xl mx-auto">
					{data.length > 0 ? (
						<SearchResults results={data} />
					) : (
						<>
							<h1>No results</h1>
							<p>Query: {query}</p>
						</>
					)}
				</div>
			</div>
		</main>
	);
}
