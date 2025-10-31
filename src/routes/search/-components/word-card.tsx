import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { GetSearchResults } from "@/types/api";

interface SearchResultCardProps {
	result: GetSearchResults;
}

export default function SearchResultCard({ result }: SearchResultCardProps) {
	const kanji = result.kanjis?.[0] || "";
	const reading = result.readings?.[0] || "";
	const meanings = result.glosses || [];

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const displayedMeanings = isExpanded ? meanings : meanings.slice(0, 2);
	const hasMore = meanings.length > 2;

	return (
		<Card className="p-4 md:p-6 hover:shadow-lg transition-shadow border-border/40">
			<div className="flex gap-4 md:gap-6">
				<div className="flex-shrink-0 flex flex-col items-center justify-center min-w-20 md:min-w-24">
					{kanji && (
						<div className="text-3xl md:text-4xl font-bold text-foreground mb-1 text-center break-words">
							{kanji}
						</div>
					)}
					{reading && (
						<div
							className={`text-sm md:text-base text-center ${!kanji ? "text-2xl md:text-3xl font-bold text-foreground" : "text-muted-foreground"}`}
						>
							{reading}
						</div>
					)}
				</div>

				<div className="flex-1 min-w-0">
					{meanings.length > 0 && (
						<div className="space-y-2">
							{displayedMeanings.map((meaning, idx) => (
								<div key={idx} className="flex gap-2 md:gap-3">
									<div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
										<span className="text-xs font-semibold text-primary">
											{idx + 1}
										</span>
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-sm md:text-base text-foreground leading-snug line-clamp-2">
											{meaning}
										</p>
									</div>
								</div>
							))}
							{hasMore && (
								<Button
									variant="ghost"
									size="sm"
									onClick={() => setIsExpanded(!isExpanded)}
									className="pl-7 md:pl-9 h-auto p-0 text-xs md:text-sm text-muted-foreground hover:text-foreground justify-start gap-1"
								>
									<ChevronDown
										size={16}
										className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
									/>
									{isExpanded
										? "Show less"
										: `+${meanings.length - 2} more definition${meanings.length - 2 !== 1 ? "s" : ""}`}
								</Button>
							)}
						</div>
					)}

					{result.score && (
						<div className="mt-3 pt-3 border-t border-border/30 flex items-center gap-2">
							<span className="text-xs text-muted-foreground">Relevance:</span>
							<div className="h-1.5 flex-1 bg-muted rounded-full overflow-hidden max-w-24">
								<div
									className="h-full bg-primary rounded-full"
									style={{ width: `${Math.min(result.score * 10, 100)}%` }}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</Card>
	);
}
