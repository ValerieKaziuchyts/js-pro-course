import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function EmojiRow({ symbol, emojiName }) {
  const codePointHex = symbol && symbol.codePointAt(0).toString(16);
  const imageSrc = `http://cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <CopyToClipboard
      text={imageSrc}
    >
      <div className="emojiRow">
        <img src={imageSrc} alt={emojiName} />
        <div className="emojiName">{emojiName}</div>
        <div className="hoverPhrase">Click to copy emoji</div>
      </div>
    </CopyToClipboard>
  );
}

export { EmojiRow };
