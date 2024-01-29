import "./App.css";
import Layout from "./component/common/layout";
import Digital from "./component/home/Digital Excellence";
import Engineering from "./component/home/Engineering Digital";
import FAQs from "./component/home/FAQs";
import Partner from "./component/home/Partner";
import Vision from "./component/home/Vision";
import Hero from "./component/home/hero";

function App() {
  return (
    <Layout>
      <div className="App">
        <Hero />
        <Digital/>
        <Engineering/>
        <Vision/>
        <Partner/>
        <FAQs />
      </div>
    </Layout>
  );
}

export default App;
