import styles from "./StreamlitChatIllustration.module.css";

export default function StreamlitChatIllustration() {
  return (
    <div
      className={styles.app}
      role="img"
      aria-label="Smart Study - Mock Chat application preview"
    >
      <header className={styles.hero}>
        <span className={styles.heroBadge}>AI Chat Interface</span>
        <h4 className={styles.heroTitle}>Smart Study - Mock Chat</h4>
        <p className={styles.heroCaption}>
          Lightweight Streamlit chat prototype for study workflows
        </p>
      </header>

      <div className={styles.chatPanel} aria-hidden="true">
        <div className={styles.messageUser}>
          <span className={styles.messageRole}>You</span>
          <p className={styles.messageBody}>
            Summarize the key risks in this quarter&apos;s broker performance
            report.
          </p>
        </div>

        <div className={styles.messageAssistant}>
          <span className={styles.messageRole}>Assistant</span>
          <p className={styles.messageBody}>
            Three areas stand out: slower Gulf response times, a 12% mobile
            conversion drop, and higher mid-tier churn.
          </p>
        </div>
      </div>

      <div className={styles.featureRow} aria-hidden="true">
        <span className={styles.featureChip}>Context</span>
        <span className={styles.featureChip}>Memory</span>
        <span className={styles.featureChip}>Tools</span>
      </div>

      <div className={styles.chatInput} aria-hidden="true">
        <span className={styles.chatInputField}>Ask a question…</span>
        <span className={styles.chatInputAction} />
      </div>
    </div>
  );
}
