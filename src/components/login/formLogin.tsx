import { Button, Text, TextInput, PasswordInput } from "@mantine/core";
import { formRootRule, isNotEmpty, useForm } from "@mantine/form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login } from "../../api/auth";

export default function FormLogin() {
  const [error, setError] = useState("");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      user: {
        firstName: "",
        password: "",
      },
    },

    validate: {
      user: {
        [formRootRule]: (value) =>
          value.firstName.trim().length > 0 &&
          value.firstName === value.password
            ? "First name and password cannot be the same"
            : null,
        firstName: isNotEmpty("First name is required"),
        password: isNotEmpty("Password is required"),
      },
    },
  });

  const handleLogin = async (values: typeof form.values) => {
    try {
      const { firstName, password } = values.user;
      const data = await login({ email: firstName, password });

      console.log("Login successful:", data);
  
    } catch (err) {
      setError("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleLogin)}>
      <TextInput
        label="Username"
        placeholder="First name"
        {...form.getInputProps("user.firstName")}
        w={400}
      />
      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        mt="md"
        {...form.getInputProps("user.password")}
        w={400}
      />

      {error && (
        <Text c="red" mt={5} fz="sm">
          {error}
        </Text>
      )}

      <div className="flex flex-row justify-between items-center">
        <Link to={`/register`} className="mt-3 hover:underline">
          <Text size="sm">Don't have an account? Register</Text>
        </Link>
        <Button type="submit" mt="lg" color="rgba(0, 0, 0, 0.48)" w={120}>
          Let's go
        </Button>
      </div>
    </form>
  );
}
