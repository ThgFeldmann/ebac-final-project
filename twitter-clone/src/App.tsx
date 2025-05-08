import { RouterProvider } from "react-router-dom";



import { GlobalStyle } from "./styles";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;