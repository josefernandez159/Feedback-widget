import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../CloseButton/CloseButton"
import { ScreenshotButton } from "../ScreenshotButton/ScreenshotButton";
import { FeedbackType, feedbackTypes } from "../WidgetsForm"
import { FormEvent, useState } from "react";

//interfaces
interface FeedbackContentStepProps{
  feedbackType: FeedbackType;
  onHandleRestartFeedback: () => void;
  onFeedbackSent: () => void;
}


export function FeedbackContentStep({
  feedbackType,
  onHandleRestartFeedback,
  onFeedbackSent}: FeedbackContentStepProps){

  const [screenshot,setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent){
    event.preventDefault();
    console.log({
      screenshot,comment
    })
    onFeedbackSent();
  }
return (
  <>
   <header>  
      <button onClick={onHandleRestartFeedback} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>


        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.Image.source} alt={feedbackTypeInfo.Image.alt} className="mr-3 w-6 h-6"/> {feedbackTypeInfo.title}          
        </span>
        <CloseButton/>
  </header>

 
  <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
  <textarea
   className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-zinc-800 scrollbar-track-transparent scrollbar-thin" 
   onChange={event => setComment(event.target.value)}
   placeholder="Conte-nos detalhe sobre o que está acontecendo..." >


   </textarea>
   <footer className="flex gap-2 mt-2">
    <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot}  />
    <button 
      disabled={comment.length == 0}
      type="submit"
      className="p-2 bg-brand-500 w-full rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500">
        Enviar Feedback
      </button>

   </footer>

  </form>

  </>
)
  
}