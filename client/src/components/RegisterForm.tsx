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
import { useState } from "react";
import { Label } from "./ui/label";
import axios from "axios";

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

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  async function handleFileUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      console.log(formData);
      const res = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Upload success:", res.data);
      alert("File uploaded!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed!");
    }
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
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="picture">Picture</Label>
            {preview && <img src={preview} alt="preview" width={200} />}
            <Input onChange={handleFileChange} accept="image/*" type="file" />
          </div>

          {/* role */}
          {/* <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="USER">USER</SelectItem>
                    <SelectItem value="ADMIN">ADMIN</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          /> */}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Button onClick={handleFileUpload}>Upload file</Button>
    </div>
  );
};

export default RegisterForm;
