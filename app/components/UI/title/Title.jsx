import cl from "./Title.module.css";

export const Title = ({ title, color }) => {
  return (
    <div className={color == "dark" ? cl.title_dark : cl.title_white}>
      <p>{title}</p>
    </div>
  );
};