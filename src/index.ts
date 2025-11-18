import { createServer } from "./server";
import config from "./core/config";

const app = createServer();

app.listen(config.port, () => {
	console.log(`Server is running on port ${config.port}`);
});
