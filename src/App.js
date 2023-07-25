import Form from "./query/form";
import Main from "./query/main";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/form" element={<Form />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
export default App;
