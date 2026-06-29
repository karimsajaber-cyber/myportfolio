import styles from "./StreamlitChatIllustration.module.css";

export default function StreamlitChatIllustration() {
  return (
    <div
      className={styles.app}
      role="img"
      aria-label="Streamlit chat application preview"
    >
      <aside className={styles.sidebar} aria-hidden="true">
        <p className={styles.sidebarTitle}>Navigation</p>
        <span className={styles.sidebarItemActive}>Chat</span>
        <span className={styles.sidebarItem}>History</span>
        <span className={styles.sidebarItem}>Settings</span>
      </aside>

      <div className={styles.main}>
        <header className={styles.appHeader}>
          <h4 className={styles.appTitle}>Streamlit Chat</h4>
          <p className={styles.appCaption}>
            Conversational interface powered by your LLM backend
          </p>
        </header>

        <div className={styles.chat}>
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
              The report highlights three areas: slower response times in the
              Gulf region, a 12% drop in lead conversion on mobile, and higher
              churn among mid-tier partners. I can break each down by segment if
              you want.
            </p>
          </div>

          <div className={styles.messageUser}>
            <span className={styles.messageRole}>You</span>
            <p className={styles.messageBody}>
              Focus on mobile conversion — what changed month over month?
            </p>
          </div>
        </div>

        <div className={styles.chatInput} aria-hidden="true">
          <span className={styles.chatInputField}>Ask a question…</span>
          <span className={styles.chatInputAction} />
        </div>
      </div>
    </div>
  );
}
