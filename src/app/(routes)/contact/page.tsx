import { ContactForm } from "@/components/pages/contact/contact-form";
import { paragraph, title } from "@/components/primitives";
import { cn } from "@/lib/utils";

export default async function ContactPage() {
  return (
    <>
      <div>
        <h1
          className={cn(
            title({ size: "md" }),
            "leading-relaxed tracking-wider"
          )}
        >
          Contact Us
        </h1>
        <p className={cn(paragraph({ class: "sm:my-8 sm:w-10/12" }))}>
          Please fill out your information here. Let&apos;s get to know each
          other, begin planning your dream software or just ask away your
          questions! Please share a brief description of how we can help you. We
          will be in touch via email soon!
        </p>
      </div>

      <div className="shadow-input w-full min-w-xs max-w-7xl rounded-md md:rounded-2xl mx-auto p-8 border bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
        <ContactForm />
      </div>
    </>
  );
}
