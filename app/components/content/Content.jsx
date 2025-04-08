import Image from "next/image";
import cl from "./Content.module.css";

export const Content = () => {
  return (
    <>
      <section className={`${cl.hero_hi}`}>
          <img src="/photos/avatar.jpg" alt="not found" className={cl.avatar} />
        <div className={`max_1000 row_between ${cl.hero_hi_present}`}>
          <div className={`center_column ${cl.name}`} >
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
      <section className={`${cl.hero_about}`}></section>
    </>
  );
};
