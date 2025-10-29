import axios from "axios";
import { Config } from "./config";

export const Api = axios.create({
	baseURL: Config.VITE_BACKEND_URL,
});
