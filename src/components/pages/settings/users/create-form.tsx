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

// NEEDS TO HANDLE FILE UPLOAD.

const formSchema = z
  .object({
    name: z.string().min(1, { message: "This field has to be filled." }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email({ message: "This field has to be filled." }),
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

export const UserCreateForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      designation: "",
      image: "",
      password: "",
      c_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success(
        "Success to create a new user. You will be redirected soon."
      );
      throw Error();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Failed to create a new user.");
      }
    }
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
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full capitalize py-5 bg-stone-100 text-stone-950 placeholder:text-stone-400 focus-visible:ring-stone-400 dark:bg-stone-900 dark:text-stone-50 dark:placeholder-text-stone-600 dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-stone-600">
                    <SelectValue placeholder="Selecione a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {['admin', 'user'].map((role, index) => (
                    <SelectItem className="capitalize" key={index} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
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
