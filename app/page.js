'use client';

import { useState } from 'react';

const players = [
  {
    name: "Spencer 'Hiko' Martin",
    team: "100 Thieves",
    csTeams: ["Team Liquid", "Cloud9", "Rogue"],
    majorWins: 1,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Nicholas 'nitr0' Cannella",
    team: "Retired",
    csTeams: ["Team Liquid"],
    majorWins: 1,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Jake 'Stewie2K' Yip",
    team: "T1",
    csTeams: ["Cloud9", "MIBR", "Team Liquid", "Evil Geniuses"],
    majorWins: 1,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Tyson 'TenZ' Ngo",
    team: "Sentinels",
    csTeams: ["Cloud9"],
    majorWins: 0,
    country: "Canada",
    image: "🎮"
  },
  {
    name: "Shahzeb 'ShahZaM' Khan",
    team: "G2 Esports",
    csTeams: ["Cloud9", "OpTic Gaming", "Complexity"],
    majorWins: 0,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Braxton 'brax' Pierce",
    team: "T1",
    csTeams: ["iBUYPOWER", "Complexity"],
    majorWins: 0,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Austin 'crashies' Roberts",
    team: "NRG",
    csTeams: ["compLexity"],
    majorWins: 0,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Victor 'Victor' Wong",
    team: "NRG",
    csTeams: ["Lazarus Esports"],
    majorWins: 0,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Adil 'ScreaM' Benrlitom",
    team: "Karmine Corp",
    csTeams: ["Titan", "G2 Esports", "Team EnVyUs", "Team Liquid"],
    majorWins: 0,
    country: "Belgium",
    image: "🎮"
  },
  {
    name: "Aleksander 'zeek' Zygmunt",
    team: "Acend",
    csTeams: ["AGO Esports", "Virtus.pro"],
    majorWins: 0,
    country: "Poland",
    image: "🎮"
  },
  {
    name: "Cvetelin 'CeRq' Dimitrov",
    team: "Cloud9",
    csTeams: ["NRG", "Evil Geniuses"],
    majorWins: 0,
    country: "Bulgaria",
    image: "🎮"
  },
  {
    name: "Lotan 'Spinx' Giladi",
    team: "Team Heretics",
    csTeams: ["ENCE"],
    majorWins: 0,
    country: "Israel",
    image: "🎮"
  },
  {
    name: "Malkolm 'mAKO' Rench",
    team: "OpTic Gaming",
    csTeams: ["Luminosity Gaming"],
    majorWins: 0,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Mathieu 'ZywOo' Herbaut",
    team: "None (Still in CS)",
    csTeams: ["Vitality"],
    majorWins: 0,
    country: "France",
    image: "🎮",
    note: "Briefly tried Valorant but returned to CS:GO"
  },
  {
    name: "Kévin 'Ex6TenZ' Droolans",
    team: "Retired",
    csTeams: ["VeryGames", "Titan", "G2 Esports", "LDLC"],
    majorWins: 0,
    country: "Belgium",
    image: "🎮"
  },
  {
    name: "Yannick 'KOOSTA' Blanchette",
    team: "NRG",
    csTeams: ["Team Liquid", "Cloud9", "NRG"],
    majorWins: 0,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Timothy 'autimatic' Ta",
    team: "T1",
    csTeams: ["Cloud9", "Gen.G"],
    majorWins: 1,
    country: "USA",
    image: "🎮"
  },
  {
    name: "Aran 'Sonic' Groesbeek",
    team: "M3C",
    csTeams: ["Gambit Youngsters"],
    majorWins: 0,
    country: "Netherlands",
    image: "🎮"
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterMajorWins, setFilterMajorWins] = useState(false);

  const countries = [...new Set(players.map(p => p.country))].sort();

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.csTeams.some(team => team.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCountry = !filterCountry || player.country === filterCountry;
    const matchesMajor = !filterMajorWins || player.majorWins > 0;

    return matchesSearch && matchesCountry && matchesMajor;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Valorant Players from Tier 1 CS:GO
          </h1>
          <p className="text-xl text-purple-200">
            Professional players who made the switch from Counter-Strike to Valorant
          </p>
        </header>

        <div className="mb-8 bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-white mb-2 font-semibold">Search</label>
              <input
                type="text"
                placeholder="Search players, teams..."
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-purple-200 border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-white mb-2 font-semibold">Country</label>
              <select
                className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
              >
                <option value="">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country} className="bg-slate-800">
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-purple-400"
                  checked={filterMajorWins}
                  onChange={(e) => setFilterMajorWins(e.target.checked)}
                />
                <span className="text-white font-semibold">Major Winners Only</span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border border-purple-400/30"
            >
              <div className="text-6xl mb-4 text-center">{player.image}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{player.name}</h2>

              <div className="space-y-3">
                <div>
                  <span className="text-purple-300 font-semibold">Valorant Team:</span>
                  <p className="text-white">{player.team}</p>
                </div>

                <div>
                  <span className="text-purple-300 font-semibold">CS:GO Teams:</span>
                  <p className="text-white">{player.csTeams.join(", ")}</p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-purple-400/30">
                  <div>
                    <span className="text-purple-300 font-semibold">Country:</span>
                    <p className="text-white">{player.country}</p>
                  </div>

                  {player.majorWins > 0 && (
                    <div className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm">
                      🏆 {player.majorWins} Major{player.majorWins > 1 ? 's' : ''}
                    </div>
                  )}
                </div>

                {player.note && (
                  <div className="text-sm text-purple-200 italic border-l-4 border-purple-400 pl-3">
                    {player.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center text-white text-xl mt-12">
            No players found matching your criteria.
          </div>
        )}

        <div className="mt-12 text-center text-purple-200">
          <p>Total Players: {filteredPlayers.length} / {players.length}</p>
        </div>
      </div>
    </main>
  );
}
