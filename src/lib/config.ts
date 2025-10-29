import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const Config = createEnv({
	clientPrefix: "VITE",

	client: {
		VITE_BACKEND_URL: z.url(),
	},

	runtimeEnv: import.meta.env,

	emptyStringAsUndefined: true,
});
