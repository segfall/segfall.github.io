addEventListener("fetch", (event) => {
    event.respondWith(
        new Response("Hello BAGEL", {
            status: 200,
            headers: { "content-type": "text/plain" },
        }),
    );
});
