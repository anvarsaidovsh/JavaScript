function playRockPaperScissors(turns) {

  if (turns.length % 2 === 0 || turns.length < 3) {
    console.error('Error: Invalid number of moves. Please provide an odd number of moves.');
    console.error('Example: node script.js Rock Paper Scissors');
    return;
  }


  const winningMap = new Map();


  for (let i = 0; i < turns.length; i++) {
    const currentMove = turns[i];
    const halfLength = Math.floor(turns.length / 2);


    const winningMoves = [];
    for (let j = 1; j <= halfLength; j++) {
      const index = (i + j) % turns.length;
      winningMoves.push(turns[index]);
    }


    winningMap.set(currentMove, winningMoves);
  }


  for (const [move, winningMoves] of winningMap) {
    console.log(`${move} beats: ${winningMoves.join(', ')}`);
  }
}


const turns = process.argv.slice(2);


playRockPaperScissors(turns);
