# Download relay

EnglishConnect's file servers only allow their own websites to download files from inside a web page,
so the app can't fetch the official slides and manuals directly. This tiny Cloudflare Worker fetches
them on the app's behalf. It only fetches EnglishConnect slide decks and learner manuals, and only
answers the app's own website.

## Set it up (free, about 10 minutes)

1. Create a free account at <https://dash.cloudflare.com/sign-up> and confirm your email.
2. In the dashboard, open **Workers & Pages** (under **Compute**), then **Create application** →
   **Create Worker** (the "Hello World" starter). Name it `ec-relay` and select **Deploy**.
3. Select **Edit code**, delete everything in the editor, paste the contents of
   [`worker.js`](worker.js), and select **Deploy**.
4. Copy the Worker's address, which looks like `https://ec-relay.<your-name>.workers.dev`, and put it
   in the app's `RELAY` setting.

The free plan allows 100,000 requests a day; one complete download is 104 requests.
