import BackgroundHeading from "./BackgroundHeading.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import ItemList from "./ItemList.tsx";
import Sidebar from "./Sidebar.tsx";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
