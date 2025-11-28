import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, XCircle, Trophy } from "lucide-react";
import { toast } from "sonner";
import { quizData } from "@/data/quizData";

const Quiz = () => {
  const { chapitre } = useParams();
  const chapitreNum = parseInt(chapitre || "1");
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = quizData[chapitreNum] || [];
  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  useEffect(() => {
    // Reset quiz when chapter changes
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  }, [chapitre]);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6 text-center space-y-4">
            <p className="text-muted-foreground">
              Les questions pour ce chapitre seront bientôt disponibles.
            </p>
            <Link to="/chapitres">
              <Button>Retour aux chapitres</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  const handleSubmit = () => {
    if (!selectedAnswer) {
      toast.error("Veuillez sélectionner une réponse");
      return;
    }

    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    setShowResult(true);
    
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Bonne réponse !");
    } else {
      toast.error("Mauvaise réponse");
    }
    
    setAnswers([...answers, isCorrect]);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <Link to="/chapitres">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Chapitres
              </Button>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-2xl mx-auto shadow-primary animate-fade-in">
            <CardContent className="pt-12 pb-8 text-center space-y-6">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Quiz Terminé !</h2>
                <p className="text-muted-foreground">
                  Votre score pour Daniel {chapitreNum}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-6xl font-bold text-gradient">
                  {percentage}%
                </div>
                <p className="text-xl text-muted-foreground">
                  {score} / {totalQuestions} bonnes réponses
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button onClick={restartQuiz} size="lg">
                  Recommencer
                </Button>
                <Link to="/chapitres">
                  <Button variant="outline" size="lg">
                    Autres chapitres
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/chapitres">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Chapitres
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Score: {score}/{totalQuestions}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Quiz Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Progress */}
          <div className="space-y-2 animate-fade-in">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} sur {totalQuestions}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="shadow-card animate-slide-up">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl leading-relaxed">
                {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                value={selectedAnswer}
                onValueChange={setSelectedAnswer}
                disabled={showResult}
                className="space-y-3"
              >
                {currentQ.options.map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                      showResult
                        ? option === currentQ.correctAnswer
                          ? "border-green-500 bg-green-50 dark:bg-green-950"
                          : selectedAnswer === option
                          ? "border-red-500 bg-red-50 dark:bg-red-950"
                          : "border-border"
                        : selectedAnswer === option
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer text-base leading-relaxed"
                    >
                      {option}
                    </Label>
                    {showResult && option === currentQ.correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    )}
                    {showResult && selectedAnswer === option && option !== currentQ.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                ))}
              </RadioGroup>

              {showResult && (
                <div className="p-4 rounded-lg bg-muted animate-fade-in">
                  <p className="text-sm font-medium mb-1">Réponse correcte :</p>
                  <p className="text-foreground">{currentQ.correctAnswer}</p>
                  {currentQ.explanation && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {currentQ.explanation}
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-end">
                {!showResult ? (
                  <Button onClick={handleSubmit} size="lg" className="min-w-32">
                    Valider
                  </Button>
                ) : (
                  <Button onClick={handleNext} size="lg" className="min-w-32">
                    {currentQuestion < totalQuestions - 1 ? "Suivant" : "Terminer"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
