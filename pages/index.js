import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import StyledButton from "@/components/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="mx-32">
      <Header/>

      <div className="flex gap-x-24 mt-8">
        <div className="basis-1/2">
          <div className="flex flex-wrap gap-y-8 mt-40">
            <div className="text-4xl font-bold">
              Want to take a Quiz, start here!!!
            </div>

            <div>
                You can do it on our platform for free. You can also <i>SELL</i> your MCQ tests or quizzes to anyone and track their results. You can customize the quiz on various categories such as <i>Technologies</i> and <i>Difficulty</i> of the questions used in the quiz.
            </div>

            <div className="flex gap-x-16 mt-8 content-center">
              <div>
                <StyledButton handleClick={(a, b) => console.log('more')} btnText={'More Info'}/>
              </div>

              <div>
                <StyledButton handleClick={(a, b) => console.log('quiz')} btnText={'Try Quiz'}/>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/2" style={{width: '100%', height: '70vh', position: 'relative'}}>
          <Image layout="fill" objectFit="cover" style={{width: '100%', height: '100%'}} src='https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148923846.jpg?size=626&ext=jpg'/>
        </div>
      </div>
    </div>
  );
}
