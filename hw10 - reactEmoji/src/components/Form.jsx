import React, { useState, useCallback, useMemo } from 'react';
import { EmojiSearch } from './EmojiSearch.jsx';
import { EmojiContainer } from './EmojiContainer.jsx';
import emojiList from '../JSON/emojiList.json';

function Form() {
  const [value, setValue] = useState('');
  const saveValue = useCallback((event) => setValue(event.target.value));

  const emojiToRender = useMemo(() => {
    const result = emojiList.filter((item) => item.keywords.includes(value)).slice(0, 15);
    return result;
  });

  return (
    <form className="emojiForm">
      <EmojiSearch onChange={saveValue} value={value} />
      <EmojiContainer emojiToRender={emojiToRender} />
    </form>
  );
}

export { Form };
