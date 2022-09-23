import react from "react"
import Review from "./Component/Review";



function App() {
  return (
    <div>
      <main>
        <section className="container">
          <div className="title">
            <h2> Our Review </h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
      

      
    </div>
  );
}

export default App;
