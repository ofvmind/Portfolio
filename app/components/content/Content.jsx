import Image from "next/image";
import cl from "./Content.module.css";
import { Title } from "../UI/title/Title";

export const Content = () => {
  return (
    <>
      <section className={`padding_85 ${cl.hero_hi}`}>
        <Title title="Welcome" color="dark" />
        <div className={`max_1000 row_between ${cl.hero_hi_present}`}>
          <div className={`center_column ${cl.name}`}>
            <img
              src="/photos/avatar.jpg"
              alt="not found"
              className={cl.avatar}
            />
            <p>VLADIMIR</p>
            <p>ZOZULYA</p>
          </div>
          <p className={cl.text}>
            My name is Vladimir, and I'm a junior JavaScript developer. I've had
            experience working on several third-party projects and have a number
            of my own personal projects.I have experience working on a project
            to create a website with instructions for an application that was
            being prepared for release. I also have experience creating a
            logistics bot for Telegram, which was written using the
            node-telegram-bot-api library. Additionally, I have my own projects
            written with this same library. I am familiar with the popular
            database MongoDB and have experience writing the authorization part
            of an API using mongoose.
          </p>
        </div>
      </section>
      <section className={`center padding_85 ${cl.hero_about}`}>
        <Title title="My Skills" color="white" />
        <div className={`center ${cl.skills}`}>
          <a
            href="https://en.wikipedia.org/wiki/HTML"
            target="_blank"
            className={`center_column ${cl.skill_div}`}
          >
            <img className={`${cl.skill_img}`} src="/icons/html.png" alt="" />
            <p>HTML 5</p>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/CSS"
            target="_black"
            className={`center_column ${cl.skill_div}`}
          >
            <img className={`${cl.skill_img}`} src="/icons/css.jfif" alt="" />
            <p>CSS 3</p>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/JavaScript"
            target="_black"
            className={`center_column ${cl.skill_div}`}
          >
            <img className={`${cl.skill_img}`} src="/icons/js.png" alt="" />
            <p>Java Script</p>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/React_(software)"
            target="_blank"
            className={`center_column ${cl.skill_div}`}
          >
            <img className={`${cl.skill_img}`} src="/icons/react.png" alt="" />
            <p>React</p>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Next.js"
            target="_blank"
            className={`center_column ${cl.skill_div}`}
          >
            <img className={`${cl.skill_img}`} src="/icons/next.jpg" alt="" />
            <p>Next.js</p>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Node.js"
            target="_blank"
            className={`center_column ${cl.skill_div}`}
          >
            <img className={`${cl.skill_img}`} src="/icons/node.png" alt="" />
            <p>Node.js</p>
          </a>
        </div>
      </section>
    </>
  );
};
