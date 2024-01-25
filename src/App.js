import "./App.css";
import Layout from "./component/common/layout";
import Digital from "./component/home/Digital Excellence";
import Hero from "./component/home/hero";

function App() {
  return (
    <Layout>
      <div className="App">
        <Hero />
        <Digital/>
      </div>
    </Layout>
  );
}

export default App;
