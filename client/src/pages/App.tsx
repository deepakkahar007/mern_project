import RegisterForm from "@/components/RegisterForm";
import { useAuthUser } from "@/hooks/useAuthUser";

function App() {
  const user = useAuthUser();

  console.log(JSON.stringify(user, null, 2));

  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default App;
