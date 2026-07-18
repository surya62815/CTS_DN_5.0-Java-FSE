import React from "react";

function IndianPlayers() {

    // Team Players
    const players = [
        "Virat Kohli",
        "Rohit Sharma",
        "Shubman Gill",
        "KL Rahul",
        "Hardik Pandya",
        "Ravindra Jadeja"
    ];

    // Destructuring
    const [player1, player2, player3, player4, player5, player6] = players;

    // Odd & Even Team Players
    const oddTeam = [player1, player3, player5];
    const evenTeam = [player2, player4, player6];

    // Two Arrays
    const T20Players = [
        "Surya Kumar Yadav",
        "Rinku Singh",
        "Tilak Varma"
    ];

    const RanjiPlayers = [
        "Sarfaraz Khan",
        "Mayank Agarwal",
        "Priyank Panchal"
    ];

    // Merge Arrays (Spread Operator)
    const mergedPlayers = [...T20Players, ...RanjiPlayers];

    return (
        <div>

            <h2>Odd Team Players</h2>
            <ul>
                {oddTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Even Team Players</h2>
            <ul>
                {evenTeam.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

            <h2>Merged T20 & Ranji Trophy Players</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>

        </div>
    );
}

export default IndianPlayers;