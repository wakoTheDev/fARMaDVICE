import React, { useState, useRef, useEffect } from 'react';
import message from './sendMessage.png'
import camera from './camera_icon.png'
import close from './close.png'
import {
  GoogleGenerativeAI,
  
} from "@google/generative-ai";
// HarmCategory,
//  HarmBlockThreshold,

const ChatbotUI = ({getComponent}) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const chatRef = useRef(null); // Reference for the chat section
  const inputRef = useRef(null); // Reference for the input field

  useEffect(() => {
    // Auto-scroll to the bottom of the chat section when messages change
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleImageUpload = () => {
    // Open image selection dialog (replace with your actual implementation)
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();

    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    };
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === '' && !selectedImage) return; // Prevent empty messages

    // Add user message to chat
    setMessages([
      ...messages,
      {
        type: 'user',
        content: userInput,
        image: selectedImage,
      },
    ]);

    

    // Send message to model (replace with your actual API call)

    const generationConfig = {
      temperature: 0.6,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
    const api_key = 'AIzaSyC_iqO1STmMjL7Z4RZZuFXGcv2WOFmJOrQ'
    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig,
    });
    
    async function run() {
            const result = await model.generateContent(userInput,selectedImage);
            setMessages([
              ...messages,
              {
                type: 'bot',
                content:result.response.text(),
              },
            ]);
           }

    run();    

    // Clear input and image
    setUserInput('');
    setSelectedImage(null);
    inputRef.current.focus();
  };

  return (
  <>
  <img src={close} alt="close" style={{width:'5.5%',height:'5.5%',position:'relative',top:'0',left:'95%'}} onClick={()=>{getComponent()}}/>
  <div className="chat-container" style={{width:'250px',height:'100%',position:'relative',padding:'5px'}}>
      <div className="chat-section" ref={chatRef} style={{width:'100%',height:'200px',border:'2px solid greeen'}}>
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.type}`}>
            {message.type === 'user' && (
              <article style={{boxSizing:'content-box',borderRadius:'8px',backgroundColor:'blue',padding:'3px',position:'relative',right:'0',marginTop:'10px'}}>
                <p>{message.content}</p>
                {message.image && (
                  <img src={message.image} alt="" style={{width:'100px',height:'50px',objectFit:'cover'}} />
                )}
              </article>
            )}
            <article style={{boxSizing:'content-box',borderRadius:'8px',backgroundColor:'blue',padding:'3px'}}>{message.type === 'bot' && <p>{message.content}</p>}</article>
          </div>
        ))}
      </div>
    </div>
    <div className="input-section" style={{width: '250px',marginTop:'10px',display:'flex'}}>
        <div style={{width:'72%',minHeightheight:'25px', marginRight:'1%'}}>
          <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={handleInputChange}
          style={{width:'100%',height:'100%'}}
        /></div>
        
        <div style={{width:'24%',height:'25px',marginLeft:'3%', display:'flex'}}>
          <button onClick={handleSendMessage}style={{width:'48%',height:'100%' ,margin:'auto 1%'}}>
            <img src={message} alt='camera icon' style={{width:'100%'}}/>
          </button>
          <button onClick={handleImageUpload} style={{width:'48%',height:'100%' ,objectFit:'cover'}}>
            <img src={camera} alt='camera icon' style={{width:'100%'}}/>
         </button>
        </div>
      </div>
  </>
  );
};

export default ChatbotUI;