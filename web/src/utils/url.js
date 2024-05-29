export const isValidHTTPUrl = (url) => {
	try {
		url = new URL(url);
	} catch (_) {
		return false;
	}

	return url.protocol === "http:" || url.protocol === "https:";
}