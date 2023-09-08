import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSituation, setRoomForImprovement, setMeasure, setRisks } from '../../redux/actions/texts';

function TextGenerator(props) {
    const dispatch = useDispatch();

    const [dialogeHistory, setDialogeHistory] = useState([]);
    const [userChatlog, setUserChatlog] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setDialogeHistory(props.prompt)
    }, [props.prompt])

    const sendMessage = async (message) => {
        setIsLoading(true);
        // Add the user message to the conversation for the api call, cannot use state here as it is async
        const apiInput = [...dialogeHistory, { role: "user", content: message }]

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    messages: apiInput,
                    max_tokens: 120,
                    temperature: 0.6,
                    n: 1,
                    model: 'gpt-3.5-turbo'
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer <your_api_key>`,
                    },
                }
            );

            const botMessage = response.data.choices[0].message.content;

            // Update the conversation state with the new messages and previous conversation
            setDialogeHistory([...dialogeHistory, { role: "user", content: message }, { role: "assistant", content: botMessage }]);
            setUserChatlog([...userChatlog, { role: "user", content: message }, { role: "assistant", content: botMessage }]);


        } catch (error) {

            console.log(error);
        } finally {
            setIsLoading(false)
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        const message = event.target.elements.message.value;
        setUserChatlog([...userChatlog, { role: "user", content: message }]);
        sendMessage(message);
        event.target.reset();
    };


    const sendBackResponse = (response) => {

        // Dispatch the corresponding action based on the label prop or action type
        switch (props.label) {
            case 'Current situation':
                dispatch(setCurrentSituation(response));
                break;
            case 'Room for improvement':
                dispatch(setRoomForImprovement(response));
                break;
            case 'Measure':
                dispatch(setMeasure(response));
                break;
            case 'Risks':
                dispatch(setRisks(response));
                break;
            default:
                break;
        }


    };


    return (
        <div>
            <h2 className='text-xl font-bold'>Text generator</h2>
            <div>

                <ul className="border border-gray-300 divide-y divide-gray-300">
                    {userChatlog &&
                        userChatlog.map((message, index) => (
                            <li key={index} className="p-2">
                                <strong className="font-bold">{message.role}: </strong>
                                <span>{message.content}</span>
                                {message.role === 'assistant' && (
                                    <div>
                                        <button
                                            onClick={() => sendBackResponse(message.content)}
                                            className="ml-2 bg-blue text-white font-bold text-sm px-3 py-1 focus:ring-gray-dark font-medium rounded-md"
                                        >
                                            Use this text
                                        </button>
                                    </div>
                                )}
                            </li>
                        ))}
                </ul>

                {isLoading ? (
                    <div className="flex items-center justify-center mt-4">
                        <svg class="animate-spin -ml-1 mr-3 h-16 w-16 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
                        <textarea name="message" placeholder="Type your message" className="w-full p-2 rounded-md shadow-md focus:outline-none focus:shadow-outline"></textarea>
                        <button type="submit" className="bg-orange text-white font-bold text-xl px-5 py-2.5 focus:ring-gray-dark font-medium rounded-md">
                            Send
                        </button>
                    </form>
                )}



            </div>
        </div>
    )
}

export default TextGenerator