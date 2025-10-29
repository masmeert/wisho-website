import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

async function fetchSearchResults(query: string) {
	await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate network delay
	return { results: [`Result 1 for ${query}`, `Result 2 for ${query}`] };
}

function searchQueryOptions(query: string) {
	return queryOptions({
		queryKey: ["search", query],
		queryFn: async () => fetchSearchResults(query),
	});
}

export const Route = createFileRoute("/search/$query")({
	component: SearchResults,
	loader: async ({ params, context: { queryClient } }) =>
		queryClient.ensureQueryData(searchQueryOptions(params.query)),
});

function SearchResults() {
	const { query } = Route.useParams();
	const { data } = useSuspenseQuery(searchQueryOptions(query));

	return (
		<div>
			<h1>Search Results</h1>
			<p>Query: {query}</p>
			<ul>
				{data.results.map((result) => (
					<li key={result}>{result}</li>
				))}
			</ul>
		</div>
	);
}
