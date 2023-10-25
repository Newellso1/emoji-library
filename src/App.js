import { useState } from "react";
import emojiList from "./emojiLibrary";
import { Header } from "./Header";
import { Input } from "./Input";
import { EmojiLibrary } from "./EmojiLibrary";
import { Footer } from "./Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container">
      <Header />
      <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EmojiLibrary emojiList={emojiList} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;
