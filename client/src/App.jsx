import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { ItemFormPage } from "./pages/ItemFormPage";
import { ItemsPage } from "./pages/ItemsPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to items */}
          <Route path="/" element={<Navigate to="/items" />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/items/:id" element={<ItemFormPage />} />
          <Route path="/items-create" element={<ItemFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
