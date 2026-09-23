export const sendEmail = async (payload: any) => {
    try {
        const response = await fetch("https://portal.vitric.in/api/vitric-solutions/email/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error("Failed to send email");
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};
