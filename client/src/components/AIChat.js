import React, { useEffect, useRef, useState } from "react";
import "../styles/aiChat.css";
import genieImage from "../assets/gyanguru-genie.png";


/* =========================================================
   TEXT FORMATTER
   Converts AI markdown-style responses into clean UI
========================================================= */

function formatBoldText(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {

    if (
      part.startsWith("**") &&
      part.endsWith("**")
    ) {

      return (
        <strong key={index}>
          {part.slice(2, -2)}
        </strong>
      );

    }

    return part;

  });
}


/* =========================================================
   AI RESPONSE FORMATTER
========================================================= */

function AIResponse({ text }) {

  if (!text) {
    return null;
  }


  const lines =
    text
      .replace(/\r/g, "")
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);


  const elements = [];

  let bulletItems = [];
  let numberedItems = [];


  const flushBullets = () => {

    if (bulletItems.length > 0) {

      elements.push(
        <ul
          className="ai-answer-list"
          key={`bullets-${elements.length}`}
        >
          {bulletItems.map((item, index) => (

            <li key={index}>
              {formatBoldText(item)}
            </li>

          ))}
        </ul>
      );

      bulletItems = [];

    }

  };


  const flushNumbers = () => {

    if (numberedItems.length > 0) {

      elements.push(
        <ol
          className="ai-answer-number-list"
          key={`numbers-${elements.length}`}
        >
          {numberedItems.map((item, index) => (

            <li key={index}>
              {formatBoldText(item)}
            </li>

          ))}
        </ol>
      );

      numberedItems = [];

    }

  };


  lines.forEach((line, index) => {

    const isBullet =
      /^[-*•]\s+/.test(line);


    const isNumber =
      /^\d+[.)]\s+/.test(line);


    const isHeading =
      /^#{1,3}\s+/.test(line);


    const boldOnlyHeading =
      /^\*\*[^*]+\*\*:?\s*$/.test(line);


    /* =========================
       BULLETS
    ========================= */

    if (isBullet) {

      flushNumbers();

      bulletItems.push(
        line.replace(/^[-*•]\s+/, "")
      );

      return;

    }


    /* =========================
       NUMBERED LIST
    ========================= */

    if (isNumber) {

      flushBullets();

      numberedItems.push(
        line.replace(/^\d+[.)]\s+/, "")
      );

      return;

    }


    /* Finish previous lists */

    flushBullets();
    flushNumbers();


    /* =========================
       MARKDOWN HEADING
    ========================= */

    if (isHeading) {

      const heading =
        line.replace(/^#{1,3}\s+/, "");

      elements.push(
        <div
          className="ai-answer-heading"
          key={`heading-${index}`}
        >

          {formatBoldText(heading)}

        </div>
      );

      return;

    }


    /* =========================
       BOLD HEADING
    ========================= */

    if (boldOnlyHeading) {

      const heading =
        line
          .replace(/^\*\*/, "")
          .replace(/\*\*:?\s*$/, "");

      elements.push(
        <div
          className="ai-answer-heading"
          key={`bold-heading-${index}`}
        >

          {heading}

        </div>
      );

      return;

    }


    /* =========================
       IMPORTANT INFORMATION
    ========================= */

    const isImportant =
      /^(Important|Note|Eligibility|Fees|Cutoff|Counselling|Documents|Deadline|Warning)\s*:/i
        .test(line);


    if (isImportant) {

      elements.push(
        <div
          className="ai-answer-important"
          key={`important-${index}`}
        >

          {formatBoldText(line)}

        </div>
      );

      return;

    }


    /* =========================
       NORMAL PARAGRAPH
    ========================= */

    elements.push(
      <p
        className="ai-answer-paragraph"
        key={`paragraph-${index}`}
      >

        {formatBoldText(line)}

      </p>
    );

  });


  /* Flush remaining items */

  flushBullets();
  flushNumbers();


  return (
    <div className="ai-formatted-answer">

      {elements}

    </div>
  );

}


/* =========================================================
   MAIN AI CHAT
========================================================= */

function AIChat() {


  const [isOpen, setIsOpen] =
    useState(false);


  const [message, setMessage] =
    useState("");


  const [messages, setMessages] =
    useState([

      {
        id: 1,
        role: "assistant",
        text:
          "**Namaste! 👋** I'm GyanGuru AI, your admission assistant.\n\nI can help you with:\n\n- **NEET counselling**\n- **College information**\n- **Courses and fees**\n- **Cutoffs and eligibility**\n- **Admission guidance**"
      }

    ]);


  const [isTyping, setIsTyping] =
    useState(false);


  const messagesEndRef =
    useRef(null);


  /* =======================================================
     AUTO SCROLL
  ======================================================= */

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [
    messages,
    isTyping
  ]);


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

  const sendMessage =
    async (customMessage = null) => {


      const text =
        customMessage !== null
          ? customMessage
          : message.trim();


      if (
        !text ||
        isTyping
      ) {
        return;
      }


      /* =========================
         ADD USER MESSAGE
      ========================= */

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


        /* =========================
           API URL
        ========================= */

        const API_URL =
          process.env.REACT_APP_API_URL ||
          "http://localhost:5000";


        const response =
          await fetch(

            `${API_URL}/api/ai/chat`,

            {

              method: "POST",

              headers: {

                "Content-Type":
                  "application/json"

              },

              body:
                JSON.stringify({

                  message: text

                })

            }

          );


        if (!response.ok) {

          throw new Error(
            "Unable to contact AI server."
          );

        }


        const data =
          await response.json();


        /* =========================
           ADD AI RESPONSE
        ========================= */

        const aiMessage = {

          id:
            Date.now() + 1,

          role:
            "assistant",

          text:
            data.reply ||
            "Sorry, I couldn't find an answer right now."

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

            id:
              Date.now() + 1,

            role:
              "assistant",

            text:
              "**Connection problem**\n\nI'm having trouble connecting to GyanGuru AI right now. Please try again in a moment."

          }

        ]);


      } finally {

        setIsTyping(false);

      }

    };


  /* =======================================================
     ENTER KEY
  ======================================================= */

  const handleKeyDown =
    (event) => {


      if (

        event.key === "Enter" &&

        !event.shiftKey

      ) {

        event.preventDefault();

        sendMessage();

      }

    };


  return (

    <>


      {/* ===================================================
          GENIE FLOATING ASSISTANT
      =================================================== */}

      {!isOpen && (

        <div className="ai-genie-container">


          <button

            type="button"

            className="ai-genie-button"

            onClick={() =>
              setIsOpen(true)
            }

            aria-label="Open GyanGuru AI"

          >

            <img

              src={genieImage}

              alt="GyanGuru AI Genie"

              className="ai-genie-image"

            />

          </button>


          <button

            type="button"

            className="ai-genie-label"

            onClick={() =>
              setIsOpen(true)
            }

          >

            Ask GyanGuru AI

          </button>


        </div>

      )}


      {/* ===================================================
          CHAT WINDOW
      =================================================== */}

      {isOpen && (

        <div className="ai-chat-window">


          {/* ================= HEADER ================= */}

          <div className="ai-chat-header">


            <div className="ai-chat-brand">


              <div className="ai-chat-logo">

                ✦

              </div>


              <div>

                <strong>
                  GyanGuru AI
                </strong>

                <span>
                  Your Admission Assistant
                </span>

              </div>


            </div>


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


          {/* ================= BODY ================= */}

          <div className="ai-chat-body">


            {/* QUICK QUESTIONS */}

            {messages.length === 1 && (

              <div className="ai-chat-quick">


                <span>
                  What can I help you with?
                </span>


                <div>

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


            {/* ================= MESSAGES ================= */}

            <div className="ai-chat-messages">


              {messages.map(
                (item) => (

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


                      {item.role === "assistant"

                        ? (

                          <AIResponse
                            text={item.text}
                          />

                        )

                        : (

                          item.text

                        )

                      }


                    </div>


                  </div>

                )
              )}


              {/* ================= TYPING ================= */}

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


          {/* ================= INPUT ================= */}

          <div className="ai-chat-input-area">


            <div className="ai-chat-input-wrapper">


              <textarea

                value={message}

                onChange={(event) =>
                  setMessage(
                    event.target.value
                  )
                }

                onKeyDown={
                  handleKeyDown
                }

                placeholder="Ask about NEET, colleges, fees..."

                rows="1"

                disabled={isTyping}

              />


              <button

                type="button"

                onClick={() =>
                  sendMessage()
                }

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

              GyanGuru AI may make mistakes.
              Verify important admission information.

            </small>


          </div>


        </div>

      )}


    </>

  );

}


export default AIChat;