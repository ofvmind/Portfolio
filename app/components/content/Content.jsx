import Image from "next/image";
import cl from "./Content.module.css";

export const Content = () => {
  return (
    <>
      <section className={`${cl.hero_hi}`}>
        <img src="/photos/avatar.jpg" alt="not found" className={cl.avatar} />
        <div
          className={`max_1000 row_between padding_85 ${cl.hero_hi_present}`}
        >
          <div className={`center_column ${cl.name}`}>
            <p>VLADIMIR</p>
            <p>ZOZULYA</p>
          </div>
          <p className={cl.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            ducimus, ipsum sint accusantium, labore magni optio iste minus amet
            reprehenderit porro? Nisi dolore incidunt tenetur vero, veniam
            dolorem iusto sit? Consequuntur laboriosam neque nemo voluptates
            nesciunt accusamus deserunt veritatis fuga eius placeat, fugit et
            itaque. Alias a possimus minima quia aut, id, repellat debitis harum
            enim, quasi nisi labore nobis! Dolore nam, blanditiis voluptatum
            libero eveniet praesentium? Natus qui harum quo. Exercitationem
            animi quas culpa, voluptatum itaque suscipit voluptates! Optio vero
            ex esse error cumque. Cum sapiente a rerum amet?
          </p>
        </div>
      </section>
      <section className={`center padding_85 ${cl.hero_about}`}>
        <div className={cl.title}>
          <p>My Skills</p>
        </div>
        <div className={`center ${cl.skills}`}>
          <div className={`center_column ${cl.skill_div}`}>
            <img className={`${cl.skill_img}`} src="/icons/html.png" alt="" />
            <p>HTML 5</p>
          </div>
          <div className={`center_column ${cl.skill_div}`}>
            <img className={`${cl.skill_img}`} src="/icons/css.jfif" alt="" />
            <p>CSS 3</p>
          </div>
          <div className={`center_column ${cl.skill_div}`}>
            <img className={`${cl.skill_img}`} src="/icons/js.png" alt="" />
            <p>Java Script</p>
          </div>
          <div className={`center_column ${cl.skill_div}`}>
            <img className={`${cl.skill_img}`} src="/icons/react.png" alt="" />
            <p>React</p>
          </div>
          <div className={`center_column ${cl.skill_div}`}>
            <img className={`${cl.skill_img}`} src="/icons/next.jpg" alt="" />
            <p>Next.js</p>
          </div>
          <div className={`center_column ${cl.skill_div}`}>
            <img className={`${cl.skill_img}`} src="/icons/node.png" alt="" />
            <p>Node.js</p>
          </div>
        </div>
      </section>
    </>
  );
};
