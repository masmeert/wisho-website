import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useSearchResultsOptions } from "./-hooks/use-search-results";

export const Route = createFileRoute("/search/$query")({
	component: SearchResults,
	loader: async ({ params, context: { queryClient } }) =>
		queryClient.ensureQueryData(useSearchResultsOptions(params.query)),
});

function SearchResults() {
	const { query } = Route.useParams();
	const { data } = useSuspenseQuery(useSearchResultsOptions(query));

	if (data.length > 0) {
		return (
			<div>
				<h1>Search Results</h1>
				<ul>
					{data.map((entry) => (
						<li key={entry.id}>
							<span>
								<span>
									{entry.kanji_forms.map((form) => form.text).join(", ")}
								</span>
								{" / "}
								<span>
									{entry.readings.map((reading) => reading.text).join(", ")}
								</span>
							</span>
							{" => "}
							<span>
								{entry.senses.map((sense, index) => (
									<span key={index}>
										{sense.glosses.map((gloss) => gloss.text).join("; ")}
									</span>
								))}
							</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
	return (
		<div>
			<h1>No results</h1>
			<p>Query: {query}</p>
		</div>
	);
}
