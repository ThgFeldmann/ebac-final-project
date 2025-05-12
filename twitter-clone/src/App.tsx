import { RouterProvider } from "react-router-dom";

import AppRoutes from "./routes";

import { GlobalStyle } from "./styles";

// Prop with User infos
type User = {
  username: string,
  password: string,
  email: string,
  id: number

  friendsList?: [Friend]
}

// Prop with Friend infos
type Friend = {
  username: string,
  id: number
}

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <RouterProvider router={AppRoutes} />
    </div>
  );
}

export default App;