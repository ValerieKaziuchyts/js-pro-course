import React from 'react';
import { EmojiRow } from './EmojiRow.jsx';

function EmojiContainer({ emojiToRender }) {
  return (
    <div className="emojiContainer">
      {emojiToRender && emojiToRender.map((item) => (
        <EmojiRow
          key={item.title}
          symbol={item.symbol}
          emojiName={item.title}
        />
      ))}
    </div>
  );
}

export { EmojiContainer };
