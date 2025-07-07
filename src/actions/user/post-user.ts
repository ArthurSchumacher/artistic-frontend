'use server'

import { UserData } from "@/types/user/post-user";

export async function postContact(formData: UserData) {
    const data = { ...formData }
    try {
        const response = await fetch(`${process.env.API_URL}/auth/sign-up`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        } as any);

        if (!response.ok) {
            throw new Error(`Failed to send contact form: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending contact form:", error);
        throw error;
    }
}
