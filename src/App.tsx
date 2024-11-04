import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopMenu } from "@/components/TopMenu";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Contact } from "@/pages/about/Contact";
import { Medewerkers } from "@/pages/about/Medewerkers";
import { Extra } from "@/pages/about/Extra";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { Gallery } from "@/pages/Gallery";
import { FullGallery } from "@/pages/FullGallery";
import { YALightboxGallery } from "@/pages/YALightboxGallery";
import { TodoApp } from "@/pages/TodoApp";
import { Items } from "@/pages/Items";

export function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="app-theme">
        <div className="min-h-screen bg-background">
          <TopMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/contact" element={<Contact />} />
            <Route path="/about/medewerkers" element={<Medewerkers />} />
            <Route path="/about/extra" element={<Extra />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/fullgallery" element={<FullGallery />} />
            <Route path="/yalightbox" element={<YALightboxGallery />} />
            <Route path="/todos" element={<TodoApp />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}