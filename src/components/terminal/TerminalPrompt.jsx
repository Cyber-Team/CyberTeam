import util from "./terminalModuleCss";

export default function TerminalPrompt({ path, children }) {
  return (
    <div className={styles.index}>
      <span className={`text-[#da0404] ${util.hideBelow600}`}>cyberteam:</span>
      <span className={`text-[#da0404] ${util.hideBelow600}`}>{path}$ </span>
      <span className="text-[#da0404]">{children}</span>
    </div>
  );
}
