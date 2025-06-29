"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/form/select";
import { Input } from "@/components/ui/form/input";
import { Button } from "@/components/ui/form/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { User } from "@/types/user/get-user";
import { users } from "@/data/users";

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email({ message: "This field has to be filled." }),
    name: z.string().min(1, { message: "This field has to be filled." }),
    designation: z.string().min(1, { message: "This field has to be filled." }),
    role: z.string().min(1, { message: "This field has to be filled." }),
    image: z.string().min(1, { message: "This field has to be filled." }),
    password: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s)/, {
        message: "This field has to be filled.",
      }),
    c_password: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s)/, {
        message: "This field has to be filled.",
      }),
  })
  .refine((data) => data.password === data.c_password, {
    message: "Passwords do not match",
    path: ["c_password"],
  });

interface UserUpdateFormProps {
  roles: string[];
}

export const UserUpdateForm = ({ roles }: UserUpdateFormProps) => {
  const [user, setUser] = useState<User>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      designation: "",
      role: "",
      image: "",
      password: "",
      c_password: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        email: user.email,
        designation: user.designation,
        role: user.role,
        image: user.image,
        password: "",
        c_password: "",
      });
    }
  }, [user, form]);

  const renderedRoles = roles.map((role, index) => {
    return (
      <SelectItem key={index} value={role}>
        {role}
      </SelectItem>
    );
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Success to update user. You will be redirected soon.");
      throw Error();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to update user.");
      }
    }
  }

  if (!user) {
    return <SearchUser onUserSelected={setUser} />;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Designation</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full py-5 bg-stone-100 text-stone-950 placeholder:text-stone-400 focus-visible:ring-stone-400 dark:bg-stone-900 dark:text-stone-50 dark:placeholder-text-stone-600 dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-stone-600">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>{renderedRoles}</SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center w-full gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="c_password"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export const SearchUser = ({
  onUserSelected,
}: {
  onUserSelected: (user: User) => void;
}) => {
  const dummyUser: User = users[0];

  return (
    <div>
      <p>Select a user to update:</p>
      <Button onClick={() => onUserSelected(dummyUser)}>Select Jane</Button>
    </div>
  );
};
