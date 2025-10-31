import { useNavigate } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { searchAtom } from "@/state/search";

export default function SearchBar() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [searchText, setSearchText] = useAtom<string>(searchAtom);
	const navigate = useNavigate({ from: "/" });

	async function onSearch(e: React.FormEvent) {
		setIsLoading(true);
		e.preventDefault();
		await navigate({
			to: "/search/$query",
			params: { query: searchText },
		});
		setIsLoading(false);
	}
	return (
		<div className="relative">
			<div className="relative flex items-center gap-2">
				<div className="flex-1 relative">
					<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
					<Input
						type="text"
						placeholder="Search..."
						value={searchText}
						disabled={isLoading}
						onChange={(e) => setSearchText(e.target.value)}
						className="pl-12 pr-4 py-3 text-base bg-card border-border focus:ring-2 focus:ring-primary/50"
					/>
				</div>

				<Button
					type="submit"
					className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
					disabled={!searchText.trim() || isLoading}
					onClick={onSearch}
				>
					{isLoading ? <Spinner /> : "Search"}
				</Button>
			</div>
		</div>
	);
}
