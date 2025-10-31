"use client";

import { useSetAtom } from "jotai";
import { BookType } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { searchAtom } from "@/state/search";

const examples = [
	{ query: "house", label: "English search", enabled: true },
	{ query: "不安", label: "Japanese search", enabled: true },
	{ query: "走った", label: "Inflection information", enabled: false },
	{ query: "日 sunlight", label: "Multi word search", enabled: false },
	{
		query: "鼻がかゆいです。",
		label: "Sentence information",
		enabled: false,
	},
	{ query: "#jlpt-n3 #adjective", label: "Tagged search", enabled: false },
];

export default function SearchExamples() {
	const setSearchText = useSetAtom(searchAtom);

	return (
		<div className="max-w-4xl mx-auto">
			<div className="flex items-center gap-2 mb-6">
				<BookType className="w-5 h-5 text-primary" />
				<h2 className="text-lg font-semibold text-foreground">
					Try these searches
				</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				{examples.map((example) => (
					<Card
						key={example.query}
						onClick={() => {
							if (example.enabled) setSearchText(example.query);
						}}
						className={cn(
							"p-3 ",
							example.enabled
								? "cursor-pointer hover:shadow-md hover:border-primary/50 transition-all group"
								: "opacity-60 cursor-not-allowed hover",
						)}
					>
						<p className="text-xs text-muted-foreground mb-1 group-hover:text-primary transition-colors">
							{example.label}
						</p>
						<p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
							{example.query}
						</p>
					</Card>
				))}
			</div>

			<div className="mt-8 text-center">
				<Button
					variant="outline"
					className="border-primary/50 text-primary hover:bg-primary/5 hover:text-primary bg-transparent text-sm"
				>
					View all search options
				</Button>
			</div>
		</div>
	);
}
