import { createFileRoute, useLoaderData } from "@tanstack/react-router";

export const Route = createFileRoute("/search/$query")({
	component: SearchResults,
	loader: async ({ params }) => {
		const query = params.query;

		return query;
	},
});

function SearchResults() {
	const data = useLoaderData({ from: "/search/$query" });

	return (
		<div>
			<h1>Search Results</h1>
			<p>Query: {data}</p>
		</div>
	);
}
