import { useState, useEffect } from 'react';
import questions from './data/Questions.jsx';
import QuizScreen from './components/QuizScreen.jsx';
import ResultScreen from './components/ResultScreen.jsx';
import './App.css';

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (answered) return;
    if (showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1){
          clearInterval(timer);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      })

    }, 1000);
    return () => clearInterval(timer);
  }, [answered, currentQ, showResult]);

  function handleTimeUp(){
    setAnswered(true);
  }

  function handleSelect(option){
    if (answered) return;
    
    setAnswered(true);  
    setSelectedOption(option);

    if(option === questions[currentQ].answer){
      setScore((prev) => prev + 1);
    }
  }

  function handleNext(){
    const nextQ = currentQ + 1;

    if(nextQ < questions.length){
      setCurrentQ(nextQ);
      setAnswered(false);
      setSelectedOption(null);
      setTimeLeft(15); 
    } else{
      setShowResult(true);
    }
  }

  function handleRestart(){
    setCurrentQ(0);
    setScore(0);
    setAnswered(false);
    setSelectedOption(null);
    setTimeLeft(15);
    setShowResult(false);
  }

  return (
    <div className="app-wraper">
      <div className="quiz-container">
        {showResult ? (
          <ResultScreen 
            score={score}
            total={questions.length}
            onRestart={handleRestart}
          />
        ) : (
          <QuizScreen
            currentQ={currentQ}
            total={questions.length}
            timeLeft={timeLeft}
            questionData={questions[currentQ]}
            answered={answered}
            selectedOption={selectedOption}
            onSelect={handleSelect}
            onNext={handleNext}
          />
        )}
      </div>
    </div>
  );
}

export default App;