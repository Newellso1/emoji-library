import { useState } from "react";
import emojiList from "./emojiLibrary";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container">
      <Header />
      <Input searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EmojiLibrary emojiList={emojiList} searchQuery={searchQuery} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Emoji Library</h1>
    </header>
  );
}

function Input({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for an Emoji?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
    </div>
  );
}

function EmojiLibrary({ emojiList, searchQuery }) {
  const filteredEmojis = emojiList.filter((emoji) =>
    emoji.keywords.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return searchQuery ? (
    <div className="emoji-list">
      {filteredEmojis.map((emoji, index) => (
        <Emoji key={index} symbol={emoji.symbol} keywords={emoji.keywords} />
      ))}
    </div>
  ) : (
    <div className="emoji-list">
      {emojiList.map((emoji, index) => (
        <Emoji key={index} symbol={emoji.symbol} keywords={emoji.keywords} />
      ))}
    </div>
  );
}

function Emoji({ symbol }) {
  return <div className="emoji">{symbol}</div>;
}

export default App;
