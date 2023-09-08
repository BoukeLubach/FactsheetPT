import React from 'react'
import Basepage from '../../components/common/BasePage'
import TextInputBlock from './TextInputBlock'

import TextGenerator from '../chat/textGenerator'
import { currentSituationPrompt, roomForImprovementPrompt, measurePrompt, risksPrompt } from '../chat/prompts/textprompts'

import { useSelector } from 'react-redux'

function FactsheetFormContainer() {

  const currentSituationText = useSelector(state => state.texts.currentSituation)
  const roomForImprovementText = useSelector(state => state.texts.roomForImprovement)
  const measureText = useSelector(state => state.texts.measure)
  const risksText = useSelector(state => state.texts.risks)


  return (
    <Basepage>
      <div className="border rounded-lg">

        <div className='bg-darkgreen  rounded-lg shadow-lg'>
          <div className="bg-darkgreen p-2">
            <h1 className='text-white text-2xl font-bold'>Description of the measure</h1>
          </div>
        </div>
        {/* current situation */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-2/3 px-2">
            <TextInputBlock label="Current situation" text = {currentSituationText}/>
          </div>
          <div className="md:w-1/3 px-2">
            <TextGenerator prompt={currentSituationPrompt} label="Current situation" />
          </div>
        </div>

        {/* room for improvement */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-2/3 px-2">
            <TextInputBlock label="Room for improvement"  text = {roomForImprovementText} />
          </div>
          <div className="md:w-1/3 px-2">
            <TextGenerator prompt={roomForImprovementPrompt}  label="Room for improvement"  />
          </div>
        </div>


        {/* measure */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-2/3 px-2">
            <TextInputBlock label="Measure" text={measureText} />
          </div>
          <div className="md:w-1/3 px-2">
            <TextGenerator prompt={measurePrompt} label="Measure" />
          </div>
        </div>


        {/* risks */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-2/3 px-2">
            <TextInputBlock label="Risks" text={risksText} />
          </div>
          <div className="md:w-1/3 px-2">
            <TextGenerator prompt={risksPrompt}  label="Risks"/>
          </div>
        </div>

      </div>
    </Basepage>
  )
}

export default FactsheetFormContainer