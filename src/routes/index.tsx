import { createFileRoute } from "@tanstack/react-router";
import SearchBar from "@/components/search-bar";
import SearchExamples from "@/components/search-examples";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
			<div className="container mx-auto px-4 py-12 md:py-20">
				<div className="max-w-3xl mx-auto mb-12">
					<div className="flex items-center justify-center gap-2 mb-4">
						<h1 className="text-4xl md:text-5xl font-bold text-balance">
							Wisho
						</h1>
					</div>
					<p className="text-center text-muted-foreground text-md mb-6">
						Japanese lookup dictionary
					</p>
					<SearchBar />
				</div>

				{/* Example Searches */}
				<SearchExamples />
			</div>
		</main>
	);
}
