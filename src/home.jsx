import NavBar from "./components/navbar";
import HomeBody from "./components/homeComponents/homeBody";

function Home() {
  return (
    <div className="min-h-full min-w-full bg-white">
      <NavBar></NavBar>
      <HomeBody></HomeBody>
    </div>
  );
}

export default Home;
