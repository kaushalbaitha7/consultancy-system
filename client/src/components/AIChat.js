import React, {
  useEffect,
  useRef,
  useState
} from "react";

import "../styles/aiChat.css";


/* =========================================================
   GYANGURU AI CHAT
========================================================= */

function AIChat() {

  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text:
        "Namaste! 👋 I’m GyanGuru AI, your admission assistant. Ask me about NEET counselling, colleges, courses, fees, cutoffs, or admissions."
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);


  /* =======================================================
     AUTO SCROLL
  ======================================================= */

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages, isTyping]);


  /* =======================================================
     QUICK QUESTIONS
  ======================================================= */

  const quickQuestions = [
    "Which deemed colleges are available?",
    "Explain NEET counselling",
    "What courses do you offer?",
    "How can you help me choose a college?"
  ];


  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  const sendMessage = async (customMessage = null) => {

    const text =
      customMessage !== null
        ? customMessage.trim()
        : message.trim();


    if (!text || isTyping) {
      return;
    }


    /* -----------------------------------------------
       ADD USER MESSAGE
    ------------------------------------------------ */

    const userMessage = {
      id: Date.now(),
      role: "user",
      text
    };


    setMessages((previous) => [
      ...previous,
      userMessage
    ]);

    setMessage("");

    setIsTyping(true);


    try {

      /* ---------------------------------------------
         BACKEND REQUEST
      --------------------------------------------- */

     const API_URL = process.env.REACT_APP_API_URL;

     const response = await fetch(
      `${API_URL}/api/ai/chat`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: text
          })
        }
      );


      /* ---------------------------------------------
         CHECK SERVER RESPONSE
      --------------------------------------------- */

      if (!response.ok) {

        throw new Error(
          `AI server returned ${response.status}`
        );

      }


      const data =
        await response.json();


      /* ---------------------------------------------
         AI MESSAGE
      --------------------------------------------- */

      const aiMessage = {

        id: Date.now() + 1,

        role: "assistant",

        text:
          data.reply ||
          "Sorry, I couldn't generate a response right now."

      };


      setMessages((previous) => [
        ...previous,
        aiMessage
      ]);


    } catch (error) {

      console.error(
        "GyanGuru AI error:",
        error
      );


      setMessages((previous) => [

        ...previous,

        {
          id: Date.now() + 1,

          role: "assistant",

          text:
            "I’m having trouble connecting to GyanGuru AI right now. Please try again in a moment."
        }

      ]);

    } finally {

      setIsTyping(false);

    }

  };


  /* =======================================================
     ENTER KEY
  ======================================================= */

  const handleKeyDown = (event) => {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      sendMessage();

    }

  };


  /* =======================================================
     CLEAR CHAT
  ======================================================= */

  const clearChat = () => {

    setMessages([
      {
        id: Date.now(),

        role: "assistant",

        text:
          "Namaste! 👋 I’m GyanGuru AI. How can I help you with your medical admission journey?"
      }
    ]);

  };


  return (

    <>

      {/* ===================================================
          FLOATING AI BUTTON
      =================================================== */}

      <button
        type="button"
        className={
          `ai-chat-floating-button ${
            isOpen ? "active" : ""
          }`
        }
        onClick={() =>
          setIsOpen((previous) => !previous)
        }
        aria-label="Open GyanGuru AI"
      >

        <span className="ai-chat-sparkle">
          ✦
        </span>

        <span className="ai-chat-button-text">
          GyanGuru AI
        </span>

      </button>


      {/* ===================================================
          CHAT WINDOW
      =================================================== */}

      {isOpen && (

        <div className="ai-chat-window">


          {/* =================================================
              HEADER
          ================================================= */}

          <div className="ai-chat-header">

            <div className="ai-chat-brand">

              <div className="ai-chat-logo">
                ✦
              </div>

              <div className="ai-chat-brand-text">

                <strong>
                  GyanGuru AI
                </strong>

                <span>
                  Admission Assistant
                </span>

              </div>

            </div>


            <div className="ai-chat-header-actions">

              <button
                type="button"
                className="ai-chat-clear"
                onClick={clearChat}
                title="Clear chat"
              >
                ↻
              </button>


              <button
                type="button"
                className="ai-chat-close"
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="Close chat"
              >
                ×
              </button>

            </div>

          </div>


          {/* =================================================
              CHAT BODY
          ================================================= */}

          <div className="ai-chat-body">


            {/* =================================================
                WELCOME / QUICK QUESTIONS
            ================================================= */}

            {messages.length === 1 && (

              <div className="ai-chat-quick">

                <span className="ai-chat-quick-title">
                  What can I help you with?
                </span>


                <div className="ai-chat-quick-list">

                  {quickQuestions.map(
                    (question) => (

                      <button
                        type="button"
                        key={question}
                        onClick={() =>
                          sendMessage(question)
                        }
                      >
                        {question}
                      </button>

                    )
                  )}

                </div>

              </div>

            )}


            {/* =================================================
                MESSAGES
            ================================================= */}

            <div className="ai-chat-messages">

              {messages.map((item) => (

                <div
                  key={item.id}
                  className={
                    `ai-chat-message ${
                      item.role === "user"
                        ? "user"
                        : "assistant"
                    }`
                  }
                >

                  {item.role === "assistant" && (

                    <div className="ai-message-avatar">
                      ✦
                    </div>

                  )}


                  <div className="ai-message-bubble">

                    {item.text}

                  </div>

                </div>

              ))}


              {/* =================================================
                  TYPING
              ================================================= */}

              {isTyping && (

                <div className="ai-chat-message assistant">

                  <div className="ai-message-avatar">
                    ✦
                  </div>


                  <div className="ai-typing">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>

              )}


              <div
                ref={messagesEndRef}
              />

            </div>

          </div>


          {/* =================================================
              INPUT
          ================================================= */}

          <div className="ai-chat-input-area">

            <div className="ai-chat-input-wrapper">

              <textarea
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask about NEET, colleges, fees..."
                rows={1}
                disabled={isTyping}
              />


              <button
                type="button"
                onClick={() => sendMessage()}
                disabled={
                  !message.trim() ||
                  isTyping
                }
                aria-label="Send message"
              >
                ➤
              </button>

            </div>


            <small>
              GyanGuru AI can make mistakes.
              Verify important admission information.
            </small>

          </div>

        </div>

      )}

    </>

  );

}


export default AIChat;