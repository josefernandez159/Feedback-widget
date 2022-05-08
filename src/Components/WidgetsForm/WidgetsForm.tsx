import bug from '../../Assets/Figmoji/bug.svg'
import ideia from '../../Assets/Figmoji/ideia.svg'
import other from '../../Assets/Figmoji/other.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSucessStep } from './Steps/FeedbackSucessStep';

//All images 
const imagem = [bug,ideia,other]

//All tipes of options 
export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    Image: {
      source: imagem[0],
      alt: 'imagem de um inseto'
    }
  },
  IDEA:{
    title: 'Ideia',
    Image: {
      source: imagem[1],
      alt: 'imagem de uma lampada'
    }
  },
  OTHER:{
    title: 'Outro',
    Image: {
      source: imagem[2],
      alt: 'imagem de uma nuvem de pensamento'
    }
  },
};


export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  
  const [feedbackType, setFeedbacktype] = useState<FeedbackType | null >(null);
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback(){
    setFeedbacktype(null);
    setFeedbackSent(false)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
    {feedbackSent ? (
  
      <FeedbackSucessStep onFeedbackRestartRequest={handleRestartFeedback} />
      
    ):(
      <>
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbacktype} />) : (
        <FeedbackContentStep 
        onHandleRestartFeedback={handleRestartFeedback} 
        feedbackType={feedbackType}
        onFeedbackSent={()=>setFeedbackSent(true)}
        />
        )}
        </>
    )}

       <footer >
          Feito com ♥ por <a className="underline underline-offset-3" href="https://github.com/josefernandez159">José Fernandez</a>
       </footer>
    </div>
  )

}