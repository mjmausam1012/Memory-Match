import React, { useState } from "react";
import bgImg from "../assets/bg-img.png";
import nebuloidLogo from "../assets/nebuloid-logo.png";

// Custom vector icons for the 5 difficulties matching the reference image
function TeddyBearIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9"
    >
      {/* Bear head */}
      <circle cx="12" cy="13.5" r="5.5" />
      {/* Ears */}
      <circle cx="7.2" cy="8.5" r="2.2" />
      <circle cx="16.8" cy="8.5" r="2.2" />
      {/* Snout */}
      <ellipse cx="12" cy="14.5" rx="2.4" ry="1.8" fill="currentColor" fillOpacity="0.25" />
      <circle cx="12" cy="13.8" r="0.75" fill="currentColor" />
      {/* Eyes */}
      <circle cx="10" cy="12" r="0.75" fill="currentColor" />
      <circle cx="14" cy="12" r="0.75" fill="currentColor" />
    </svg>
  );
}

function BackpackIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9"
    >
      {/* Top handle */}
      <path d="M9 6a3 3 0 0 1 6 0" />
      {/* Main pack body */}
      <rect x="5.5" y="6" width="13" height="15" rx="4" />
      {/* Front pocket */}
      <path d="M8 13.5h8a1.5 1.5 0 0 1 1.5 1.5V18a2 2 0 0 1-2 2H8.5a2 2 0 0 1-2-2v-3a1.5 1.5 0 0 1 1.5-1.5Z" />
      {/* Pocket zipper detail */}
      <line x1="10.5" y1="13.5" x2="13.5" y2="13.5" />
    </svg>
  );
}

function BookSparklesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9"
    >
      {/* Open Book */}
      <path d="M4 19.5v-11A2.5 2.5 0 0 1 6.5 6H11a1 1 0 0 1 1 1v13a.5.5 0 0 1-.76.43A3.5 3.5 0 0 0 9 19.5H4Z" />
      <path d="M20 19.5v-11A2.5 2.5 0 0 0 17.5 6H13a1 1 0 0 0-1 1v13a.5.5 0 0 0 .76.43A3.5 3.5 0 0 1 15 19.5h5Z" />
      {/* Sparkles / Magic above book */}
      <path d="M12 1.5v3M10.5 3h3" strokeWidth="1.6" />
      <circle cx="7" cy="2.5" r="0.8" fill="currentColor" />
      <circle cx="17" cy="2.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <circle cx="15.5" cy="8.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

function GamepadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9"
    >
      <rect x="2" y="6" width="20" height="12" rx="6" />
      <path d="M6 12h4m-2-2v4" />
      <circle cx="15" cy="10.5" r="1" fill="currentColor" />
      <circle cx="17.5" cy="12.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function PreGameLobby({ onCancel, onStart }) {
  const [step, setStep] = useState(1);
  const [cfg, setCfg] = useState({
    difficulty: "Primary",
    mode: "team",
    teamA: "Team A",
    teamB: "Team B",
    timeLimit: 300,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [showHowTo, setShowHowTo] = useState(false);

  // 5 Difficulty levels with titles and descriptions exactly from the reference image
  const DIFFICULTY_LEVELS = [
    {
      id: "Nursery",
      title: "NURSERY",
      desc: "Perfect For Little Learners To Start Their Journey.",
      icon: <TeddyBearIcon />,
    },
    {
      id: "Primary",
      title: "PRIMARY",
      desc: "Build Strong Basics And Boost Your Confidence.",
      icon: <BackpackIcon />,
    },
    {
      id: "Middle",
      title: "MIDDLE",
      desc: "Sharpen Memory With Balanced Intermediate Puzzles.",
      icon: <BookSparklesIcon />,
    },
    {
      id: "High",
      title: "HIGH",
      desc: "For Players Ready For Intense And Exciting Challenges.",
      icon: <RocketIcon />,
    },
    {
      id: "Gamer",
      title: "GAMER",
      desc: "Extreme Difficulty For True Gaming Champions!",
      icon: <GamepadIcon />,
    },
  ];

  const MODES = [
    {
      id: "team",
      label: "Team vs Team",
      desc: "2 Groups on 1 Screen",
      icon: "👥",
    },
    {
      id: "robot",
      label: "Robot Practice",
      desc: "Solo practice against AI",
      icon: "🤖",
    },
  ];

  const handleStart = () => {
    setErrorMsg("");
    if (cfg.mode === "team") {
      if (!cfg.teamA.trim()) {
        setErrorMsg("Please enter a name for Team A.");
        return;
      }
      if (!cfg.teamB.trim()) {
        setErrorMsg("Please enter a name for Team B.");
        return;
      }
    } else if (cfg.mode === "robot") {
      if (!cfg.teamA.trim()) {
        setErrorMsg("Please enter your name to start.");
        return;
      }
    }
    onStart({ ...cfg, timeLimit: 300 });
  };

  return (
    <main
      className="mm-screen mm-lobby-screen"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Top Header with Nebuloid Branding */}
      <header className="mm-lobby-header">
        <div className="mm-branding" title="Nebuloid Tech Studio">
          <img
            src={nebuloidLogo}
            alt="Nebuloid Tech Studio"
            className="mm-branding-logo"
          />
        </div>
        <h1 className="mm-lobby-title">
          {step === 1 && "CHOOSE DIFFICULTY"}
          {step === 2 && "CHOOSE MODE"}
          {step === 3 && (cfg.mode === "robot" ? "PLAYER SETUP" : "TEAM SETUP")}
        </h1>
      </header>

      {/* Step 1: 5 Difficulty Level Cards */}
      {step === 1 && (
        <section className="mm-difficulty-grid" aria-label="Difficulty Levels">
          {DIFFICULTY_LEVELS.map((level) => (
            <button
              key={level.id}
              className="mm-diff-card"
              onClick={() => {
                setCfg({ ...cfg, difficulty: level.id });
                setStep(2);
              }}
              title={`Select ${level.title} Difficulty`}
            >
              <div className="mm-diff-icon-circle">{level.icon}</div>
              <h2 className="mm-diff-name">{level.title}</h2>
              <p className="mm-diff-desc">{level.desc}</p>
            </button>
          ))}
        </section>
      )}

      {/* Step 2: Choose Mode */}
      {step === 2 && (
        <section className="mm-mode-grid" aria-label="Game Modes">
          {MODES.map((m) => (
            <button
              key={m.id}
              className="mm-mode-card"
              onClick={() => {
                if (m.id === "team") {
                  setCfg({ ...cfg, mode: "team", teamB: "Team B" });
                  setStep(3);
                } else {
                  // Robot mode: set mode to robot, opponent to Robot, and prompt for player name in step 3
                  setCfg({ ...cfg, mode: "robot", teamB: "Robot", teamA: cfg.teamA === "Team A" ? "Player 1" : cfg.teamA });
                  setStep(3);
                }
              }}
            >
              <div className="mm-mode-icon">{m.icon}</div>
              <h2 className="mm-mode-title">{m.label}</h2>
              <p className="mm-mode-desc">{m.desc}</p>
            </button>
          ))}
        </section>
      )}

      {/* Step 3: Team / Player Setup */}
      {step === 3 && (
        <section className="mm-setup-card" aria-label="Player Setup">
          <div className="space-y-4">
            {cfg.mode === "robot" ? (
              <div>
                <label className="mm-setup-label">ENTER YOUR NAME</label>
                <input
                  className="mm-setup-input"
                  value={cfg.teamA}
                  onChange={(e) => {
                    setCfg({ ...cfg, teamA: e.target.value });
                    setErrorMsg("");
                  }}
                  placeholder="Enter your name (e.g. Alex)"
                  autoFocus
                />
                <div className="mt-3 p-3 bg-[#fff9ee] rounded-xl border border-[#ecd5bd] text-xs text-[#704824] flex items-center gap-2.5">
                  <span className="text-2xl">🤖</span>
                  <span>
                    You will play vs <strong>Nebuloid AI Robot</strong>. Defeat the robot to earn your official <strong>Nebuloid Victory Certificate</strong>!
                  </span>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <label className="mm-setup-label">Team A Name</label>
                  <input
                    className="mm-setup-input"
                    value={cfg.teamA}
                    onChange={(e) => {
                      setCfg({ ...cfg, teamA: e.target.value });
                      setErrorMsg("");
                    }}
                    placeholder="Enter Team A name"
                  />
                </div>

                <div>
                  <label className="mm-setup-label">Team B Name</label>
                  <input
                    className="mm-setup-input"
                    value={cfg.teamB}
                    onChange={(e) => {
                      setCfg({ ...cfg, teamB: e.target.value });
                      setErrorMsg("");
                    }}
                    placeholder="Enter Team B name"
                  />
                </div>
              </>
            )}
          </div>

          {errorMsg && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 font-bold text-sm rounded-xl border border-red-200 text-center">
              {errorMsg}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              className="mm-pill-btn"
              onClick={() => {
                setStep(2);
                setErrorMsg("");
              }}
            >
              ← Back
            </button>
            <button
              className="mm-pill-btn"
              style={{
                background: "linear-gradient(180deg, #3d1a08 0%, #200c03 100%)",
                color: "#ffdf88",
                borderColor: "rgba(255, 225, 160, 0.4)",
              }}
              onClick={handleStart}
            >
              Start Game →
            </button>
          </div>
        </section>
      )}

      {/* Bottom Bar matching StartScreen and Reference Image */}
      <footer className="mm-bottom-bar">

      </footer>
    </main>
  );
}
