import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    toast("reset password has been sent !!!");

    setTimeout(() => {
      navigate("/login");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <Link to={"/login"}>
            <CardAction>Go to login</CardAction>
          </Link>
        </CardHeader>
        <CardContent>
          <Input type="email" placeholder="Enter a email" />
        </CardContent>
        <CardFooter>
          <Button onClick={handleForgotPassword}>Send Code</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPassword;
