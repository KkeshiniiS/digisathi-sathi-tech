import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, Trophy } from "lucide-react";

const fraudMessages = [
  {
    id: 1,
    message: "Congratulations! You've won ₹50,000! Click here to claim your prize now!",
    isFraud: true,
    explanation: "This is a fraud message. Legitimate companies don't ask you to click random links to claim prizes."
  },
  {
    id: 2,
    message: "Your OTP for bank login is 123456. Valid for 5 minutes. Do not share with anyone.",
    isFraud: false,
    explanation: "This is a legitimate OTP message from your bank. The warning not to share is a good sign."
  },
  {
    id: 3,
    message: "Your account will be blocked in 24 hours. Click this link and enter your password to prevent it.",
    isFraud: true,
    explanation: "This is fraud! Banks never ask for passwords through messages or threaten to block accounts this way."
  }
];

export const DigitalLiteracyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === fraudMessages[currentQuestion].isFraud) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < fraudMessages.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowExplanation(false);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <Card className="p-6">
        <div className="text-center space-y-4">
          <Trophy className="w-16 h-16 text-warning mx-auto" />
          <h2 className="text-2xl font-bold text-foreground">Quiz Complete!</h2>
          <p className="text-lg">You scored {score} out of {fraudMessages.length}</p>
          <div className="p-4 bg-accent rounded-lg">
            <p className="text-sm text-accent-foreground">
              {score === fraudMessages.length 
                ? "Perfect! You can spot fraud messages like a pro!" 
                : score >= fraudMessages.length / 2
                ? "Good job! Keep practicing to improve your digital safety."
                : "Keep learning! Digital safety skills improve with practice."}
            </p>
          </div>
          <Button onClick={restartQuiz} className="mt-4">
            Try Again
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Spot the Fraud</h2>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {fraudMessages.length}
            </span>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
          <p className="text-foreground font-medium">
            "{fraudMessages[currentQuestion].message}"
          </p>
        </div>

        <p className="text-muted-foreground">Is this message a fraud attempt?</p>

        {!showResult && (
          <div className="flex gap-3">
            <Button 
              onClick={() => handleAnswer(true)}
              variant="outline"
              className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <XCircle className="w-4 h-4 mr-2" />
              Yes, it's fraud
            </Button>
            <Button 
              onClick={() => handleAnswer(false)}
              variant="outline" 
              className="flex-1 border-success text-success hover:bg-success hover:text-success-foreground"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              No, it's legitimate
            </Button>
          </div>
        )}

        {showResult && (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${
              selectedAnswer === fraudMessages[currentQuestion].isFraud 
                ? 'bg-success/10 border border-success text-success-foreground' 
                : 'bg-destructive/10 border border-destructive text-destructive-foreground'
            }`}>
              <p className="font-medium">
                {selectedAnswer === fraudMessages[currentQuestion].isFraud ? 'Correct!' : 'Incorrect!'}
              </p>
            </div>

            <Button 
              onClick={() => setShowExplanation(!showExplanation)}
              variant="outline"
              className="w-full"
            >
              {showExplanation ? 'Hide' : 'Show'} Explanation
            </Button>

            {showExplanation && (
              <div className="p-4 bg-accent rounded-lg">
                <p className="text-sm text-accent-foreground">
                  {fraudMessages[currentQuestion].explanation}
                </p>
              </div>
            )}

            <Button onClick={nextQuestion} className="w-full">
              {currentQuestion < fraudMessages.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};