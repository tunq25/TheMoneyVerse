'use client';

import { useState, useEffect, useCallback } from 'react';
import { questions } from '@/data/questions';
import demo2026Data from '@/data/2026-demo.json';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, CheckCircle2, XCircle, Rocket } from 'lucide-react';

type GameMode = 'setup' | 'playing' | 'ended';
type DataSource = 'basic' | '2026';

const demo2026Questions = demo2026Data.map((q: any) => ({
  id: q.id,
  question: q.question,
  options: q.options as [string, string, string, string],
  answer: q.correct_answer,
  explanation: q.explanation
}));

export default function Quiz() {
  const [gameStatus, setGameStatus] = useState<GameMode>('setup');
  const [dataSource, setDataSource] = useState<DataSource>('2026');
  const [questionCount, setQuestionCount] = useState<number | 'All'>(20);
  const [questionSet, setQuestionSet] = useState<typeof questions>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const startGame = () => {
    const sourceData = dataSource === '2026' ? demo2026Questions : questions;
    let selectedQuestions = [...sourceData].sort(() => 0.5 - Math.random());
    if (questionCount !== 'All') {
      selectedQuestions = selectedQuestions.slice(0, questionCount as number);
    }
    setQuestionSet(selectedQuestions);
    setGameStatus('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(20);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questionSet.length - 1) {
      setCurrentQuestionIndex((prev: number) => prev + 1);
      setTimeLeft(20);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setGameStatus('ended');
    }
  }, [currentQuestionIndex, questionSet.length]);

  const handleAnswer = useCallback((index: number | null) => {
    if (selectedAnswer !== null) return; 
    
    const currentQuestion = questionSet[currentQuestionIndex];
    if (index !== null) {
      const correct = index === currentQuestion.answer;
      setIsCorrect(correct);
      setSelectedAnswer(index);
      if (correct) setScore((prev: number) => prev + 1);
    } else {
      setIsCorrect(false);
      setSelectedAnswer(-1); // Timeout
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  }, [currentQuestionIndex, questionSet, selectedAnswer, handleNextQuestion]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStatus === 'playing' && selectedAnswer === null && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev: number) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && selectedAnswer === null) {
      handleAnswer(null);
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameStatus, selectedAnswer, handleAnswer]);

  return (
    <div className="min-h-[100dvh] w-full bg-[#0a0a1a] font-sans text-white flex flex-col items-center justify-center relative selection:bg-cyan-500/30">
      
      {/* Background Cosmic Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a1a] to-[#0a0a1a] pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-500/10 blur-[150px] pointer-events-none" />
      
      {/* Subtle Star Particles (CSS only representation) */}
      <div className="absolute inset-0 z-0 background-stars opacity-50" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #ffffff, rgba(0,0,0,0))', backgroundRepeat: 'repeat', backgroundSize: '200px 200px' }} />

      <AnimatePresence mode="wait">
        
        {/* SETUP SCREEN: All Stars Menu */}
        {gameStatus === 'setup' && (
          <motion.div 
            key="setup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-3xl px-6 relative z-10"
          >
            <div className="p-8 md:p-14 backdrop-blur-3xl bg-blue-950/20 border border-cyan-500/20 rounded-[2.5rem] shadow-[0_0_50px_rgba(6,182,212,0.1)] text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
              
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)] filter">
                VŨ TRỤ ĐỒNG TIỀN
              </h1>
              <p className="text-cyan-100/70 mb-12 text-sm md:text-lg font-light tracking-wide max-w-xl mx-auto">
                Khám phá ranh giới của tri thức tài chính. Chọn trạm không gian của bạn để bắt đầu hành trình.
              </p>

              <div className="mb-8 relative z-20">
                <p className="text-cyan-200/80 mb-4 text-sm font-medium tracking-widest uppercase">Chọn Bộ Đề</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'basic', label: 'CƠ BẢN' },
                    { id: '2026', label: '2026 (500 CÂU MỚI)' }
                  ].map((src) => (
                    <button
                      key={src.id}
                      onClick={() => setDataSource(src.id as DataSource)}
                      className={`relative group p-4 rounded-xl transition-all duration-300 overflow-hidden ${
                        dataSource === src.id
                          ? 'border-amber-400/50 shadow-[0_0_20px_rgba(251,191,36,0.2)] bg-amber-500/10'
                          : 'border-cyan-500/20 hover:border-cyan-400/50 bg-slate-900/40'
                      } border backdrop-blur-md`}
                    >
                       <span className={`text-sm md:text-lg font-bold tracking-widest ${
                          dataSource === src.id ? 'text-amber-300' : 'text-cyan-50'
                        }`}>
                          {src.label}
                        </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10 relative z-20">
                <p className="text-cyan-200/80 mb-4 text-sm font-medium tracking-widest uppercase">Số Lượng Câu Hỏi</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {['20', '50', '100', '300', '500', 'All'].map((num) => (
                    <button
                      key={num}
                      onClick={() => setQuestionCount(num === 'All' ? 'All' : parseInt(num))}
                      className={`relative group p-6 rounded-2xl transition-all duration-500 overflow-hidden ${
                        questionCount === (num === 'All' ? 'All' : parseInt(num))
                          ? 'border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.2)]'
                          : 'border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                      } border backdrop-blur-md bg-slate-900/40`}
                    >
                      <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 ${
                        questionCount === (num === 'All' ? 'All' : parseInt(num))
                          ? 'bg-gradient-to-br from-amber-500/40 to-transparent opacity-100'
                          : 'bg-gradient-to-br from-cyan-500/20 to-transparent group-hover:opacity-100'
                      }`} />
                      
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className={`w-3 h-3 rounded-full shadow-[0_0_10px_currentColor] ${
                           questionCount === (num === 'All' ? 'All' : parseInt(num)) ? 'text-amber-400 bg-amber-400' : 'text-cyan-400 bg-cyan-400'
                        }`} />
                        <span className={`text-xl md:text-2xl font-bold tracking-widest ${
                          questionCount === (num === 'All' ? 'All' : parseInt(num)) ? 'text-amber-300' : 'text-cyan-50'
                        }`}>
                          {num !== 'All' ? `${num} CÂU` : 'ALL'}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={startGame}
                className="group relative w-full md:w-auto md:px-16 py-5 rounded-2xl font-bold text-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <div className="relative flex items-center justify-center gap-3">
                  <Rocket className="w-5 h-5 text-amber-300 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" /> 
                  <span className="tracking-widest">KHỞI HÀNH</span>
                </div>
              </button>
            </div>
          </motion.div>
        )}

        {/* PLAYING SCREEN: Cosmic Countdown */}
        {gameStatus === 'playing' && (
          <motion.div 
            key="playing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="w-full max-w-5xl px-4 md:px-8 relative z-10 flex flex-col min-h-[100dvh] justify-center py-10"
          >
            {/* Header: Shooting Star Progress */}
            <div className="flex justify-between items-center mb-8 md:mb-12 w-full pt-4 md:pt-0">
              <div className="flex-1 pr-8">
                <p className="text-xs md:text-sm font-medium text-cyan-200/60 tracking-widest mb-3 uppercase">
                  Trạm <span className="text-amber-400 font-bold">{currentQuestionIndex + 1}</span> / {questionSet.length}
                </p>
                <div className="w-full h-1 bg-blue-950/50 rounded-full overflow-hidden relative">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-white shadow-[0_0_10px_#22d3ee]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex + 1) / questionSet.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Glowing Cosmic Timer */}
              <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 shrink-0">
                <div className={`absolute inset-0 rounded-full blur-md transition-colors duration-500 ${
                  timeLeft > 10 ? 'bg-cyan-500/20' : timeLeft > 5 ? 'bg-amber-500/20' : 'bg-red-500/40 animate-pulse'
                }`} />
                <svg className="w-full h-full transform -rotate-90 relative z-10">
                  <circle cx="50%" cy="50%" r="42%" fill="none" stroke="currentColor" strokeWidth="6%" className="text-blue-950" />
                  <motion.circle 
                    cx="50%" cy="50%" r="42%" 
                    fill="none" 
                    stroke="url(#timerGradient)" 
                    strokeWidth="6%" 
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                    initial={{ strokeDasharray: 264, strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: 264 - (264 * timeLeft) / 20 }}
                    transition={{ duration: 1, ease: 'linear' }}
                  />
                  <defs>
                    <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={timeLeft > 5 ? "#fcd34d" : "#ef4444"} />
                      <stop offset="100%" stopColor={timeLeft > 10 ? "#22d3ee" : timeLeft > 5 ? "#f59e0b" : "#b91c1c"} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <span className={`text-2xl md:text-3xl font-black font-mono tracking-tighter ${
                    timeLeft <= 5 ? 'text-red-400' : 'text-amber-300'
                  }`}>{timeLeft}</span>
                </div>
              </div>
            </div>

            {/* Floating Crystal Question Card */}
            <div className="w-full mb-10 relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-cyan-400/20 to-blue-600/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative p-8 md:p-12 backdrop-blur-2xl bg-[#0b1120]/80 border-t border-l border-white/10 border-b border-r border-[#0a0a1a] rounded-[2rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.5)] min-h-[180px] flex items-center justify-center">
                <h2 className="text-xl md:text-3xl font-medium leading-relaxed text-blue-50 text-center tracking-wide">
                  {questionSet[currentQuestionIndex]?.question}
                </h2>
              </div>
            </div>

            {/* Magnetic Answer Platforms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              {questionSet[currentQuestionIndex]?.options.map((option: string, index: number) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === questionSet[currentQuestionIndex].answer;
                
                let buttonStateObj = {
                  bg: 'bg-[#111827]/60 hover:bg-[#1f2937]/80',
                  border: 'border-blue-900/40 hover:border-cyan-500/50',
                  text: 'text-blue-100/80 hover:text-cyan-50',
                  shadow: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]',
                  indicator: 'bg-blue-950 text-cyan-600 border-blue-800'
                };

                let animateProps = {};
                let customTransition: any = { type: "spring", bounce: 0.4 };

                if (selectedAnswer !== null) {
                  if (isSelected) {
                    if (isCorrect) {
                      buttonStateObj = { 
                        bg: 'bg-emerald-950/40', 
                        border: 'border-emerald-400', 
                        text: 'text-emerald-100', 
                        shadow: 'shadow-[0_0_30px_rgba(16,185,129,0.2)]',
                        indicator: 'bg-emerald-500 text-white border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]'
                      };
                    } else {
                      buttonStateObj = { 
                        bg: 'bg-red-950/40', 
                        border: 'border-red-500', 
                        text: 'text-red-100', 
                        shadow: 'shadow-[0_0_30px_rgba(239,68,68,0.2)]',
                        indicator: 'bg-red-500 text-white border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                      };
                      animateProps = { x: [-10, 10, -10, 10, 0] };
                      customTransition = { duration: 0.4 };
                    }
                  } else if (isCorrectAnswer) {
                    buttonStateObj = { 
                      bg: 'bg-emerald-950/20', 
                      border: 'border-emerald-500/50', 
                      text: 'text-emerald-200/80', 
                      shadow: '',
                      indicator: 'bg-emerald-600/30 text-emerald-400 border-emerald-500/50'
                    };
                  } else {
                    buttonStateObj = { 
                      bg: 'bg-[#0a0a1a]/50 opacity-40', 
                      border: 'border-transparent', 
                      text: 'text-slate-600', 
                      shadow: '',
                      indicator: 'bg-slate-800 text-slate-600 border-slate-700'
                    };
                  }
                }

                return (
                  <motion.button
                    key={index}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleAnswer(index)}
                    animate={animateProps}
                    transition={customTransition}
                    className={`group relative w-full p-5 md:p-6 rounded-2xl border text-left transition-all duration-300 backdrop-blur-xl flex items-center gap-4 ${buttonStateObj.bg} ${buttonStateObj.border} ${buttonStateObj.text} ${buttonStateObj.shadow}`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-bold text-sm transition-colors ${buttonStateObj.indicator}`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-sm md:text-base font-medium leading-relaxed flex-1 pt-0.5">{option.replace(/^[A-D]\.\s*/, '')}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ENDED SCREEN */}
        {gameStatus === 'ended' && (
          <motion.div 
            key="ended"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md px-6 relative z-10"
          >
            <div className="p-10 backdrop-blur-2xl bg-blue-950/30 border border-amber-400/20 rounded-[2.5rem] shadow-[0_0_50px_rgba(251,191,36,0.1)] text-center">
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/50 animate-spin-slow" style={{ animationDuration: '8s' }} />
                <div className="absolute inset-2 rounded-full border-2 border-cyan-400/30 animate-spin-slow" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
                <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                  <span className="text-3xl font-black text-[#0a0a1a]">{Math.round((score / questionSet.length) * 100)}%</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-cyan-50 mb-2 uppercase tracking-widest">Hành trình hoàn tất</h2>
              <p className="text-cyan-200/60 mb-10 text-sm">
                Bạn đã chinh phục <span className="text-amber-400 font-bold text-lg mx-1">{score}</span> / <span className="text-white font-bold">{questionSet.length}</span> trạm tri thức.
              </p>
              
              <button
                onClick={() => setGameStatus('setup')}
                className="group relative w-full py-4 rounded-2xl font-bold text-sm tracking-widest uppercase bg-transparent border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center justify-center gap-2">
                  <RotateCcw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" /> Về Trạm Chính
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
