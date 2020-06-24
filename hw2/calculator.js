const candidates = [
  {
    id: 1,
    name: 'Viktar',
    votes: 370,
  },
  {
    id: 2,
    name: 'Valeriy',
    votes: 240,
  },
  {
    id: 3,
    name: 'Alexander',
    votes: 3,
    modifyer: 150,
  },
  {
    id: 4,
    name: 'Svetlana',
    votes: 290,
    modifyer: 0.2,
  },
];

function electionsDefiner(candidates) {
  const winner = candidates.reduce(function(sum, item) {
      if (item.votes > sum) {
        sum = item.votes;
        name = item.name;
      }
      return name;
  }, 0);
  const votesSum = candidates.reduce(function(sum, item) {
    return sum + item.votes;
  }, 0);

  return {
    winner,
    votesSum,
  };
}
