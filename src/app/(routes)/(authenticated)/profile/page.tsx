import { ProfileForm } from "@/components/pages/profile/profile-form";
import { subtitle, title } from "@/components/primitives";
import { users } from "@/data/users";
import { cn } from "@/lib/utils";

export default async function ProfilePage() {
  const user = users[0];

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="h-20 w-full rounded-lg flex items-center gap-2 p-8 bg-stone-100 dark:bg-stone-900">
          <h1
            className={cn(
              title({
                size: "sm",
              })
            )}
          >
            Profile:
          </h1>
          <h2 className={cn(subtitle({ size: "lg", color: "blue" }))}>
            {user.designation}
          </h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row sm:flex-1 gap-2">
        <div className="h-20 lg:h-full w-full rounded-lg flex items-center justify-around p-8 bg-stone-100 dark:bg-stone-900">
          <ProfileForm user={user} />
        </div>
      </div>
    </>
  );
}
