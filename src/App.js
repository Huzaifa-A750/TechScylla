import "./App.css";
import Layout from "./component/common/layout";
import Hero from "./component/home/hero";

function App() {
  return (
    <Layout>
      <div className="App">
        <Hero />
      </div>
    </Layout>
  );
}

export default App;
