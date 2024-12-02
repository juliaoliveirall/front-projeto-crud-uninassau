import { Header } from "./components/header";
import { LoginRegister } from "./components/loginRegister";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <LoginRegister />
      <Footer />
    </div>
  );
}
