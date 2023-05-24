let longestCommonSubstring = '';
if (process.argv.length > 2) 
{
  const strings = process.argv.slice(2);
  const firstString = strings[0];
  const restStrings = strings.slice(1);

  for (let i = 0; i < firstString.length; i++) 
  {
    for (let j = i + 1; j <= firstString.length; j++) 
    {
      const substring = firstString.slice(i, j);
      if (restStrings.every((str) => str.includes(substring)) && substring.length > longestCommonSubstring.length) 
      {
        longestCommonSubstring = substring;
      }
    }
  }
}

console.log(longestCommonSubstring);

