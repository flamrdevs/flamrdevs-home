import { init, trackEvent } from "@aptabase/web";

import * as dotenv from "~/dotenv";

init(`${dotenv.APTABASE_APP_KEY}`);

export { trackEvent };
