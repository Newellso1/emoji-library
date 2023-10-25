import { Emoji } from "./Emoji";

export function EmojiLibrary({ emojiList, searchQuery }) {
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
