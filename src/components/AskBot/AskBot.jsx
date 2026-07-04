import { useEffect, useId, useRef, useState } from "react";
import {
  askBotPhoneDisplay,
  askBotPhoneNumber,
  findBotResponse,
  greetingMessage,
  quickQuestions,
  recommendationFormEndpoint,
  recommendationFormSource,
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

function RecommendationForm({
  onBack,
  onSubmitSuccess,
  formId,
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [validationError, setValidationError] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedRecommendation = recommendation.trim();

    if (!trimmedName || !trimmedRecommendation) {
      setValidationError("Please enter your name and recommendation.");
      setSubmitError(false);
      return;
    }

    setValidationError("");
    setSubmitError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch(recommendationFormEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          role: role.trim(),
          recommendation: trimmedRecommendation,
          source: recommendationFormSource,
        }),
      });

      if (response.ok) {
        onSubmitSuccess();
        return;
      }

      setSubmitError(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      id={formId}
      className={styles.recommendationForm}
      onSubmit={handleSubmit}
      noValidate
    >
      <p className={styles.recommendationHelper}>
        Your recommendation will be sent directly to Karim.
      </p>

      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor={`${formId}-name`}>
          Name
        </label>
        <input
          id={`${formId}-name`}
          type="text"
          className={styles.formInput}
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isSubmitting}
          aria-required="true"
        />
      </div>

      <div className={styles.formField}>
        <label className={styles.formLabel} htmlFor={`${formId}-role`}>
          Role / Company
        </label>
        <input
          id={`${formId}-role`}
          type="text"
          className={styles.formInput}
          placeholder="Your role or company"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className={styles.formField}>
        <label
          className={styles.formLabel}
          htmlFor={`${formId}-recommendation`}
        >
          Recommendation
        </label>
        <textarea
          id={`${formId}-recommendation`}
          className={styles.formTextarea}
          placeholder="Write a short recommendation..."
          value={recommendation}
          onChange={(event) => setRecommendation(event.target.value)}
          disabled={isSubmitting}
          rows={4}
          aria-required="true"
        />
      </div>

      {validationError ? (
        <p className={styles.formValidation} role="alert">
          {validationError}
        </p>
      ) : null}

      {submitError ? (
        <p className={styles.formError} role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <button
        type="submit"
        className={styles.formSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send recommendation"}
      </button>

      <div className={styles.recommendationFormActions}>
        <button
          type="button"
          className={styles.backToQuestions}
          onClick={onBack}
          disabled={isSubmitting}
        >
          Back to questions
        </button>
      </div>
    </form>
  );
}

export default function AskBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [introPulseActive, setIntroPulseActive] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [phonePopupMessageId, setPhonePopupMessageId] = useState(null);
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);
  const [recommendationSuccess, setRecommendationSuccess] = useState(false);
  const [recommendationFormKey, setRecommendationFormKey] = useState(0);
  const rootRef = useRef(null);
  const bodyRef = useRef(null);
  const latestAssistantRef = useRef(null);
  const messageIdRef = useRef(0);
  const quickQuestionsId = useId();
  const recommendationFormId = useId();

  const trimmedInput = inputValue.trim();
  const canSend = trimmedInput.length > 0;
  const hasConversationStarted = messages.length > 0;
  const showInitialActions =
    !hasConversationStarted && !isRecommendationOpen;
  const lastAssistantMessageId = [...messages]
    .reverse()
    .find((message) => message.role === "assistant")?.id;

  function resetRecommendation() {
    setIsRecommendationOpen(false);
    setRecommendationSuccess(false);
    setRecommendationFormKey((current) => current + 1);
  }

  function resetChat() {
    setMessages([]);
    setInputValue("");
    setPhonePopupMessageId(null);
    resetRecommendation();
    messageIdRef.current = 0;

    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }

  function openRecommendationForm() {
    setIsRecommendationOpen(true);
    setRecommendationSuccess(false);
    setPhonePopupMessageId(null);

    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }

  function handleRecommendationSuccess() {
    setRecommendationSuccess(true);

    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }

  function handleWriteAnother() {
    setRecommendationSuccess(false);
    setRecommendationFormKey((current) => current + 1);
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
    setIntroPulseActive(false);
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

            {showInitialActions ? (
              <>
                <div
                  className={styles.quickQuestions}
                  role="group"
                  aria-labelledby={quickQuestionsId}
                >
                  <p
                    id={quickQuestionsId}
                    className={styles.quickQuestionsLabel}
                  >
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

                <div className={styles.recommendationTriggerWrap}>
                  <button
                    type="button"
                    className={styles.recommendationTrigger}
                    onClick={openRecommendationForm}
                  >
                    Write a recommendation
                  </button>
                </div>
              </>
            ) : null}

            {isRecommendationOpen ? (
              <div className={styles.recommendationSection}>
                {recommendationSuccess ? (
                  <>
                    <p className={styles.recommendationSuccess} role="status">
                      Thank you — your recommendation was sent to Karim.
                    </p>
                    <div className={styles.recommendationFormActions}>
                      <button
                        type="button"
                        className={styles.backToQuestions}
                        onClick={resetChat}
                      >
                        Back to questions
                      </button>
                      <button
                        type="button"
                        className={styles.writeAnotherButton}
                        onClick={handleWriteAnother}
                      >
                        Write another
                      </button>
                    </div>
                  </>
                ) : (
                  <RecommendationForm
                    key={recommendationFormKey}
                    formId={recommendationFormId}
                    onBack={resetChat}
                    onSubmitSuccess={handleRecommendationSuccess}
                  />
                )}
              </div>
            ) : null}

            {hasConversationStarted ? (
              <div className={styles.backToQuestionsWrap}>
                <button
                  type="button"
                  className={styles.backToQuestions}
                  onClick={resetChat}
                >
                  Back to questions
                </button>
              </div>
            ) : null}
          </div>

          {!isRecommendationOpen ? (
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
          ) : null}
        </div>
      ) : null}

      <div
        className={[
          styles.launcherWrap,
          isOpen || !introPulseActive ? styles.isActive : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className={styles.pulseRing} aria-hidden="true" />
        <span
          className={`${styles.pulseRing} ${styles.pulseRingDelay}`}
          aria-hidden="true"
        />
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
    </div>
  );
}
