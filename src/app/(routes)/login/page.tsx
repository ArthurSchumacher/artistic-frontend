import { LoginForm } from "@/components/pages/login/login-form";
import { title } from "@/components/primitives";
import { fontMono } from "@/config/fonts";
import { cn } from "@/lib/utils";

export default async function LoginPage() {
  return (
    <div className="shadow-input w-full max-w-sm rounded-md md:rounded-2xl mx-auto p-8 border bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
      <h1 className={cn(
        title({size: "md"}),
        "flex items-center justify-center leading-relaxed tracking-wider"
      )}>Login</h1>
      <LoginForm />
    </div>
  );
}
