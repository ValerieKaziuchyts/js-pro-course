import React from 'react';

function EmojiSearch({ onChange, value }) {
  return (
    <input
      className="emojiSearch"
      placeholder="Search the emoji..."
      type="search"
      onChange={onChange}
      value={value}
    />
  );
}

export { EmojiSearch };
