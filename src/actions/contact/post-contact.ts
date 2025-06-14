'use server'

import { ContactData } from "@/types/contact/post-contact";

export async function postContact(formData: ContactData) {
    const data = {
        subject: `[+1] ${formData.subject}`,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        message: formData.message
    }
    try {
        const response = await fetch(`${process.env.API_URL}/email`, {
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
