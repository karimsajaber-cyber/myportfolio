import ProductBrowserFrame from "./ProductBrowserFrame";
import StreamlitChatIllustration from "./StreamlitChatIllustration";
import styles from "./ProjectPreview.module.css";

export default function ProjectPreview({ project }) {
  return (
    <div className={styles.previewCol}>
      <div className={styles.shell}>
        <ProductBrowserFrame url={project.previewUrl}>
          {project.useIllustration ? (
            <StreamlitChatIllustration />
          ) : (
            <img
              src={project.image}
              alt={`${project.title} product screenshot`}
              className={styles.screenshot}
            />
          )}
        </ProductBrowserFrame>
      </div>
    </div>
  );
}
