export function Emoji({ symbol }) {
  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(symbol)
        .then(() => {
          alert("Emoji copied to clipboard: " + symbol);
        })
        .catch((error) => {
          console.error("Failed to copy to clipboard: " + error);
          fallbackCopyToClipboard(symbol);
        });
    } else {
      fallbackCopyToClipboard(symbol);
    }
  };

  const fallbackCopyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      alert("Emoji copied to clipboard: " + text);
    } catch (err) {
      console.error("Fallback copy failed: " + err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="emoji" onClick={copyToClipboard}>
      {symbol}
    </div>
  );
}
