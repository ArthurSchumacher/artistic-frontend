"use client";

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
import { Button } from "@/components/ui/form/button";
import { LoaderIcon } from "lucide-react";

const formSchema = z.object({
  label: z.string().min(1, { message: "This field has to be filled." }),
  description: z.string().min(1, { message: "This field has to be filled." }),
});

export const FeatureCreateForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      label: "",
      description: "",
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
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          {form.formState.isSubmitting ? (
            <LoaderIcon className="ml-2 animate-spin" size={24} />
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </Form>
  );
};
