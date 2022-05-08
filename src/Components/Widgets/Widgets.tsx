import {ChatTeardropDots} from 'phosphor-react'
import {Popover} from '@headlessui/react'
import { WidgetForm } from '../WidgetsForm/WidgetsForm'

export function Widget(){


  return (
  <>
  <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-8 fkex flex-col items-end">

  <Popover.Panel><WidgetForm/></Popover.Panel>
  <Popover.Button  className=' bg-purple-500 rounded-full px-3 h-12 text-white flex items-center group'>
    <ChatTeardropDots className='w-6 h-6'/>

    <span className=" max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">

      <span className=" pl-3 "></span> FeedBack
    </span>
    
  </Popover.Button>
  </Popover>
  </>
  )
}