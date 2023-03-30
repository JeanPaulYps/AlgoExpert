/*
Instructions: O(competitions)
Memory: O(competitions + participants) if participants = competitions/2 (assuming different teams)
        O(competitions)
*/

// const HOME_TEAM_WINNER_CODE = 1;
// const AWAY_TEAM_WINNER_CODE = 0;

// const addPoints = (participantPoints: Record<string, number>, team: string) => {
//     if (team in participantPoints) {
//         participantPoints[team] = participantPoints[team] + 3;
//     }
//     else {
//         participantPoints[team] = 3;
//     }
// }

// const getTheGreatest = (participantPoints: Record<string, number>) => {
//     let winnerTeam = "";
//     let winnerPoints = -1;
//     for (const team in participantPoints) {
//         const teamPoints = participantPoints[team];
//         if (teamPoints > winnerPoints) {
//             winnerPoints = teamPoints;
//             winnerTeam = team;
//         }
//     }
//     return winnerTeam;
// }

// export function tournamentWinner(competitions: string[][], results: number[]) {
//   // Write your code here.
//   let participantPoints: Record<string, number> = {};
//   competitions.forEach(([homeTeam, awayTeam], index) => {
//     const matchWinner = results[index];
//     if (matchWinner === HOME_TEAM_WINNER_CODE) {
//         addPoints(participantPoints, homeTeam);
//     } else {
//         addPoints(participantPoints, awayTeam);
//     }
//   })
//   return getTheGreatest(participantPoints);
// }

/* -------------------------------------------------------------------------- */
/*                              Version 2                                     */
/* -------------------------------------------------------------------------- */

type best = {
  name: string;
  score: number;
};

const HOME_TEAM_WINNER_CODE = 1;
const AWAY_TEAM_WINNER_CODE = 0;

const addPoints = (participantPoints: Record<string, number>, team: string) => {
  if (team in participantPoints) {
    participantPoints[team] = participantPoints[team] + 3;
  } else {
    participantPoints[team] = 3;
  }
};

const checkIfTheTeamIsTheBest = (
  participantPoints: Record<string, number>,
  bestTeam: best,
  teamName: string
) => {
  const teamScore = participantPoints[teamName];
  if (teamScore > bestTeam.score) {
    bestTeam.name = teamName;
    bestTeam.score = teamScore;
  }
};

export function tournamentWinner(competitions: string[][], results: number[]) {
  const bestTeam: best = {
    name: "",
    score: 0,
  };
  let participantPoints: Record<string, number> = {};
  competitions.forEach(([homeTeam, awayTeam], index) => {
    const matchWinner = results[index];
    const winnerTeam =
      matchWinner === HOME_TEAM_WINNER_CODE ? homeTeam : awayTeam;
    addPoints(participantPoints, winnerTeam);
    checkIfTheTeamIsTheBest(participantPoints, bestTeam, winnerTeam);
  });

  return bestTeam.name;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
