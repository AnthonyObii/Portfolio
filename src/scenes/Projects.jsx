import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, liveLink, githubLink, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-5 mb-3 text-sm md:text-base lg:text-lg">{description}</p>
        <div className="flex space-x-4">
          <a href={liveLink} className="text-sm md:text-base lg:text-lg text-blue-500 hover:underline">
            See Live
          </a>
          <a href={githubLink} className="text-sm md:text-base lg:text-lg text-blue-500 hover:underline">
            View on GitHub
          </a>
        </div>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        className="w-400 h-400 object-cover object-center"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-8 md:pt-16 lg:pt-24 pb-8 md:pb-16 lg:pb-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SOME OF MY PROJECTS
          </div>
          <Project
            title="Ecommerce"
            liveLink="https://ecommerce-teal-pi.vercel.app/"
            githubLink="https://github.com/AnthonyObii/Ecommerce"
            description="React-driven website, integrating Strapi CMS for dynamic interfaces and Stripe for secure transactions"
          />
          <Project
            title="Mern App"
            liveLink="https://socio-nine.vercel.app"
            githubLink="https://github.com/AnthonyObii/Socio"
            description=" MERN stack-powered app, offering a dynamic user experience with adaptable light and dark modes."
          />

          {/* ROW 3 */}
          <Project
            title="Landing Page"
            liveLink="https://gpt-3-hazel.vercel.app"
            githubLink="https://github.com/AnthonyObii/GPT-3"
            description="Innovative React-based AI website landing page, seamlessly blending cutting-edge technology and intuitive design."
          />
          <Project
            title="Restuarant Page"
            liveLink="https://amakalagos.netlify.app/"
            githubLink="https://github.com/AnthonyObii/Nigeria-Food"
            description="Modern restaurant website featuring a responsive design, enticing visuals, and an intuitive menu."
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
          <a href="https://github.com/AnthonyObii" target="_blank" rel="noopener noreferrer">
          VIEW MY GITHUB 
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
