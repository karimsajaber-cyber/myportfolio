import { useEffect, useId, useRef, useState } from "react";
import {
  askBotPhoneDisplay,
  askBotPhoneNumber,
  findBotResponse,
  greetingMessage,
  quickQuestions,
} from "../../content/askBot";
import styles from "./AskBot.module.css";

function ChatIcon() {
  return (
    <svg
      className={styles.launcherIcon}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 8.25h9m-9 3.75h5.25M8.25 18.75 5.25 20.25V6.75A2.25 2.25 0 0 1 7.5 4.5h9a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 16.5 16.5H9.75L8.25 18.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 12 14-7-4 14-2-5-8-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 4.8c.4-1 1.5-1.4 2.4-.9l1.8 1c.8.5 1.1 1.5.7 2.3l-.7 1.5c.8 1.6 2.1 3 3.8 3.8l1.5-.7c.8-.4 1.8-.1 2.3.7l1 1.8c.5.9.1 2-.9 2.4l-1.7.7c-2.4 1-5.1-.1-7.2-2.2S3.9 8.7 4.9 6.3l.7-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isInternalAnchor(href) {
  return href?.startsWith("#");
}

function PhonePopup() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(askBotPhoneNumber);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={styles.phonePopup} role="region" aria-label="Karim phone number">
      <span className={styles.phonePopupIcon} aria-hidden="true">
        <PhoneIcon />
      </span>
      <span className={styles.phonePopupNumber}>{askBotPhoneDisplay}</span>
      <button
        type="button"
        className={styles.phoneCopyButton}
        onClick={handleCopy}
        aria-label="Copy phone number"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function MessageActions({
  actions,
  messageId,
  phonePopupOpen,
  onPhonePopupToggle,
  onInternalNavigate,
}) {
  if (!actions?.length) {
    return null;
  }

  return (
    <div className={styles.messageActions}>
      {actions.map((action) => {
        if (action.type === "phonePopup") {
          return (
            <div key={action.label} className={styles.phoneActionWrap}>
              <button
                type="button"
                className={styles.actionButton}
                onClick={() => onPhonePopupToggle(messageId)}
                aria-expanded={phonePopupOpen}
                aria-label="Call Karim"
              >
                {action.label}
              </button>
              {phonePopupOpen ? <PhonePopup /> : null}
            </div>
          );
        }

        return (
          <a
            key={`${action.label}-${action.href}`}
            href={action.href}
            className={styles.actionLink}
            onClick={() => {
              if (isInternalAnchor(action.href)) {
                onInternalNavigate();
              }
            }}
            {...(action.external
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {action.label}
          </a>
        );
      })}
    </div>
  );
}

export default function AskBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [phonePopupMessageId, setPhonePopupMessageId] = useState(null);
  const rootRef = useRef(null);
  const bodyRef = useRef(null);
  const latestAssistantRef = useRef(null);
  const messageIdRef = useRef(0);
  const quickQuestionsId = useId();

  const trimmedInput = inputValue.trim();
  const canSend = trimmedInput.length > 0;
  const hasConversationStarted = messages.length > 0;
  const lastAssistantMessageId = [...messages]
    .reverse()
    .find((message) => message.role === "assistant")?.id;

  function resetChat() {
    setMessages([]);
    setInputValue("");
    setPhonePopupMessageId(null);
    messageIdRef.current = 0;

    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }

  function closePanel() {
    setIsOpen(false);
    resetChat();
  }

  function handleInternalNavigate() {
    setIsOpen(false);
    resetChat();
  }

  function handlePhonePopupToggle(messageId) {
    setPhonePopupMessageId((current) =>
      current === messageId ? null : messageId,
    );
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closePanel();
      }
    }

    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        closePanel();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!bodyRef.current) {
      return;
    }

    if (messages.length === 0) {
      bodyRef.current.scrollTop = 0;
      return;
    }

    if (latestAssistantRef.current) {
      latestAssistantRef.current.scrollIntoView({
        block: "start",
        behavior: "auto",
      });
    }
  }, [messages]);

  function createMessage(role, text, actions = []) {
    messageIdRef.current += 1;

    return {
      id: `askbot-message-${messageIdRef.current}`,
      role,
      text,
      actions,
    };
  }

  function sendMessage(rawText) {
    const text = rawText.trim();

    if (!text) {
      return;
    }

    const response = findBotResponse(text);

    setPhonePopupMessageId(null);
    setMessages((current) => [
      ...current,
      createMessage("user", text),
      createMessage("assistant", response.answer, response.actions),
    ]);
    setInputValue("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(inputValue);
  }

  function handleQuickQuestion(question) {
    sendMessage(question);
  }

  function togglePanel() {
    setIsOpen((current) => {
      if (current) {
        resetChat();
        return false;
      }

      return true;
    });
  }

  return (
    <div className={styles.root} ref={rootRef}>
      {isOpen ? (
        <div
          id="askbot-panel"
          className={styles.panel}
          role="dialog"
          aria-modal="true"
          aria-labelledby="askbot-title"
        >
          <header className={styles.header}>
            <div className={styles.headerText}>
              <h2 id="askbot-title" className={styles.title}>
                Ask Karim AI
              </h2>
              <p className={styles.subtitle}>
                Ask about my projects, skills, experience, or contact details.
              </p>
            </div>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closePanel}
              aria-label="Close assistant"
            >
              <CloseIcon />
            </button>
          </header>

          <div className={styles.body} ref={bodyRef}>
            <div className={styles.messageList}>
              <div className={`${styles.message} ${styles.messageAssistant}`}>
                <p className={styles.messageText}>{greetingMessage}</p>
              </div>

              {messages.map((message) => (
                <div
                  key={message.id}
                  ref={
                    message.id === lastAssistantMessageId
                      ? latestAssistantRef
                      : undefined
                  }
                  className={[
                    styles.message,
                    message.role === "user"
                      ? styles.messageUser
                      : styles.messageAssistant,
                  ].join(" ")}
                >
                  <p className={styles.messageText}>{message.text}</p>
                  {message.role === "assistant" ? (
                    <MessageActions
                      actions={message.actions}
                      messageId={message.id}
                      phonePopupOpen={phonePopupMessageId === message.id}
                      onPhonePopupToggle={handlePhonePopupToggle}
                      onInternalNavigate={handleInternalNavigate}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            {!hasConversationStarted ? (
              <div
                className={styles.quickQuestions}
                role="group"
                aria-labelledby={quickQuestionsId}
              >
                <p id={quickQuestionsId} className={styles.quickQuestionsLabel}>
                  Quick questions
                </p>
                <div className={styles.quickQuestionsList}>
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type="button"
                      className={styles.quickQuestion}
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.backToQuestionsWrap}>
                <button
                  type="button"
                  className={styles.backToQuestions}
                  onClick={resetChat}
                >
                  Back to questions
                </button>
              </div>
            )}
          </div>

          <form className={styles.composer} onSubmit={handleSubmit}>
            <label className={styles.inputLabel} htmlFor="askbot-input">
              Message
            </label>
            <div className={styles.inputRow}>
              <input
                id="askbot-input"
                type="text"
                className={styles.input}
                placeholder="Ask about Karim..."
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                aria-label="Ask about Karim"
              />
              <button
                type="submit"
                className={styles.sendButton}
                disabled={!canSend}
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className={styles.launcher}
        onClick={togglePanel}
        aria-expanded={isOpen}
        aria-controls="askbot-panel"
        aria-label="Ask Karim"
      >
        <ChatIcon />
        <span>Ask Karim</span>
      </button>
    </div>
  );
}
