import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentSituation, setRoomForImprovement, setMeasure, setRisks } from '../../redux/actions/texts' ;

function TextInputBlock(props) {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Dispatch the corresponding action based on the label prop
    switch (props.label) {
      case 'Current situation':
        dispatch(setCurrentSituation(value));
        break;
      case 'Room for improvement':
        dispatch(setRoomForImprovement(value));
        break;
      case 'Measure':
        dispatch(setMeasure(value));
        break;
      case 'Risks':
        dispatch(setRisks(value));
        break;
      default:
        break;
    }
  };

  return (
    <section className="">
      <div className="mx-0 py-2">
        <div className="mx-0">
          <div className="mb-4">
            <label htmlFor="message" className="block text-white bg-mediumgreen font-bold mb-0 p-2">
              {props.label}
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 text-gray border border-gray rounded-md resize-y"
              value={props.text}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextInputBlock;