"use client";

import { Button } from "@/components/ui/button/button";
import { Cover } from "@/components/ui/cover/cover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form/form";
import { Input } from "@/components/ui/form/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

const formSchema = z.object({
  id: z.string().min(1, { message: "This field has to be filled." }),
});

export const FeatureDeleteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Success to login. You will be redirected soon.");
      throw Error();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error("Invalid credentials.");
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <Cover>ID</Cover>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" isLoading={form.formState.isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
