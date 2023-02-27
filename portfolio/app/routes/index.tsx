import Footer from "~/Components/Footer";
import Main from "~/Components/Main";
import NavBar from "~/Components/NavBar";

export default function Index(): JSX.Element {
  return (
    <div>
      <NavBar />
      <body>
        <Main />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
