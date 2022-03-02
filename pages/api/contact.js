export default async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "only post requests supported" });
    }

    const { username, email, subject, body } = req.body || {};

    if (!process.env.DISCORD_WEBHOOK || [username, email, subject, body].some((x) => typeof x !== "string")) {
        return res.status(400).json({ error: "bad request" });
    }

    const resMsg = await fetch(process.env.DISCORD_WEBHOOK, {
        method: "POST",
        body: JSON.stringify({
            embeds: [
                {
                    author: {
                        name: username.slice(0, 50)
                    },
                    color: 0x7289da,
                    footer: {
                        text: email.slice(0, 100)
                    },
                    title: subject.slice(0, 256),
                    description: body.slice(0, 4096)
                }
            ]
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => (res.status !== 204 ? { error: "failed to send the message" } : { success: true }))
        .catch(() => ({ error: "internal server error" }));

    res.status(resMsg.error ? 500 : 200).json(resMsg);
};
