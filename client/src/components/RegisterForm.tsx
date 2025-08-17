import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type RegisterFormType,
  RegisterUserFormSchema,
} from "@/types/zod-schema";

const RegisterForm = () => {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterUserFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      avatar_url: "",
      role: "USER",
      isVerified: false,
    },
  });

  function onSubmit(values: RegisterFormType) {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UserName</FormLabel>
                <FormControl>
                  <Input placeholder="example@google.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@google.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="****" {...field} />
                </FormControl>
                <FormDescription>Enter your 4 digit password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* avatar url */}
          <FormField
            control={form.control}
            name="avatar_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar Url</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Enter your 4 digit password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
