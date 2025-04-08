import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
