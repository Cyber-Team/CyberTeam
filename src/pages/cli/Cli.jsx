import React, { useEffect } from "react";
import { Terminal } from "primereact/terminal";
import { TerminalService } from "primereact/terminalservice";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import { Typewriter } from "react-simple-typewriter";
export default function Cli() {
  const commandHandler = (text) => {
    console.log("execu  ting: ", text);
    let response;
    let argsIndex = text.indexOf(" ");
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case "help":
        response = (
          <div>
            <ul>
              <li>date: returns current date</li>
              <li>greet: returns a greeting message</li>
              <li>random: returns a random number</li>
              <li>who-lug: returns info about Cyber Team</li>
              <li>clear: clears the terminal</li>
              <li>
                event-list: returns the list of all events conducted by linux
                club till now
              </li>
              <li>[name of event] : returns information about the event</li>
              <li>learn-linux-text: returns some basic linux commands</li>
              <li>
                learn-linux-video: returns link to video tutorials of Linux made
                by our Linux Experts
              </li>
              <li>board-member: returns list of board members</li>
            </ul>
          </div>
        );
        break;

      case "date":
        response = "Today is " + new Date().toDateString();
        break;

      case "greet":
        response = "Greetings from The Cyber Team!";
        break;

      case "random":
        response = Math.floor(Math.random() * 100);
        break;

      case "clear":
        response = null;
        break;

      case "who-CyberTeam":
        response =
          "The 'Cyber Team' of VIT, Chennai was created to spread awareness of Free and Open Source Software (FOSS) through Linux flavours. It believes in developing collaborative open-source projects.It encourages users to understand the systems and softwares they use on a fundamental level. Which can be achieved only using non-proprietary tools.It aims to get members to contribute to FOSS, make them more industry ready and to promote GNU/Linux in General.";
        break;

      case "event-list":
        response = (
          <div>
            <ul>
              <li>00: Adrenaline/FOSS Day</li>
              <li>01: Rescue Tux</li>
              <li>02: Cyber-0-Day</li>
              <li>03: Hackers' Horizon</li>
              <li>04: GSOC Made Easy</li>
              <li>05: LINUX Installation Booth</li>
              <li>06: Password'23</li>
              <li>07: Cyber-0-Day 2.0</li>
              <li>08: Password'24</li>
              <li>09: Docker Workshop</li>
              <li>10: Paradox</li>
            </ul>
          </div>
        );

        break;
      case "adrenaline-FOSS":
        response =
          "Held on the 17th March, 2022, Adreanline/FOSS Day was a one-day event for participants to show-off their familiarity with open-source technologies. Participants gathered to demonstrate their projects to an industry expert.";
        break;
      case "cyber-0-day":
        response =
          "Cyber-0-Day 2.0, the flagship event of Technovit, took our future hackers on a riveting expedition into the world of cybersecurity. Held at the grand Netaji Auditorium, this 24-hour tech marathon was an unforgettable experience.The event commenced with a knowledge-packed workshop covering five key topics: Linux fundamentals, OSINT reconnaissance, Web exploitation, cryptography, and Binary exploitation. Participants absorbed valuable insights and honed their skills during these interactive as well as hands-on sessions. Our tech team was active throughout the sessions assisting them with their doubts.";
        break;
      case "gsoc-made-easy":
        response =
          "We successfully organised “Google Summer of Code Made Easy” , purpose of the event was to guide students about GSOC. Beleswar Prasad Padhi, president of Cyber Team was speaker of the event, he participated in GSoC and contributed to the well-known Metasploit cybersecurity framework";
        break;
      case "linux-installation-booth":
        response =
          "We successfully organised “LINUX INSTALLATION BOOTH”, where we helped students both install Linux OS and dual boot their systems. Our aim was to make Linux accessible to everyone, regardless of their technical background, and we are proud to say that we achieved this goal. During the event, we provided step-by-step guidance and assistance to students installing Linux on their systems. We welcomed more than 200 participants. It was amazing to see the enthusiasm and curiosity of the students who participated in the booth. Many of them were interested in learning more about Linux and its potential.";
        break;
      case "password":
        response =
          "Password in this event participants will have the opportunity to engage in hands-on workshops, where they can learn practical skills related to cybersecurity. These workshops will cover areas like cryptography, penetration testing, and incident response";
        break;

      case "cyber-0-day2":
        response =
          "Cyber-0-Day 2.0, the flagship event of Technovit, took our future hackers on a riveting expedition into the world of cybersecurity. Held at the grand Netaji Auditorium, this 24-hour tech marathon was an unforgettable experience.The event commenced with a knowledge-packed workshop covering five key topics: Linux fundamentals, OSINT reconnaissance, Web exploitation, cryptography, and Binary exploitation. Participants absorbed valuable insights and honed their skills during these interactive as well as hands-on sessions. Our tech team was active throughout the sessions assisting them with their doubts.";
        break;

      case "fun":
        response = (
          <div>
            <a
              href="https://www.youtube.com/watch?v=1J10xyPTE4I"
              target="_blank"
            >
              {" "}
              Cl1Ck m3
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=OF_5EKNX0Eg"
              target="_blank"
            >
              {" "}
              Cl1Ck m3
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=gCRzng7LsQI"
              target="_blank"
            >
              {" "}
              Cl1Ck m3
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=6KJpy9DRzfY"
              target="_blank"
            >
              {" "}
              Cl1Ck m3
            </a>
            <br />
            <a
              href="https://www.youtube.com/watch?v=2zpCOYkdvTQ"
              target="_blank"
            >
              {" "}
              Cl1Ck m3
            </a>
          </div>
        );
        break;

      case "learn-linux-video":
        response = (
          <a href="https://www.youtube.com/watch?v=nZDx0dSeg6w" target="_blank">
            Click here!
          </a>
        );
        break;

      case "dhananjay":
        response =
          "Dhananjay made this website. He is the best developer in the universe.";
        break;

      case "learn-linux-text":
        response = (
          <div>
            <ul>
              <li>ls: List the contents of a directory.</li>
              <li>cd: Change the current directory. cd directory_name</li>
              <li>pwd: Print the current working directory.</li>
              <li>mkdir: Create a new directory. mkdir new_directory</li>
              <li>rm: Remove files or directories. rm file_name</li>
              <li>cp: Copy files or directories. cp source destination</li>
              <li>
                {" "}
                mv: Move or rename files or directories. mv old_name new_name
              </li>
              <li>
                touch: Create an empty file or update the access and
                modification times of a file. touch filename
              </li>
              <li>cat: Display the contents of a file. cat filename</li>
              <li>
                echo: Display a message or concatenate files. echo "Hello,
                Linux!"
              </li>
            </ul>
          </div>
        );
        break;
        ``;

      case "board-member":
        response = (
          <div>
            <ul>
              <li>Founder : Abhishek Kumar</li>
              <li>Co-Founder : Aditi Rai</li>
              <li>Technical Head : Animesh</li>
              <li>Frontend Lead : Dhananjay</li>
              <li>President : Abhishek</li>
            </ul>
          </div>
        );
        break;
      case "op king":
        response = "opakakak camel";
        break;

      case "baleshwar":
        response = (
          <div>
            <ul>
              <li>
                In the realm where penguins dance and code weaves its intricate
                tale,
              </li>
              <li>
                Baleshwar, a luminary, steers the Linux ship without fail.
              </li>
              <li>Ex-President of the club, his leadership shines bright,</li>
              <li>Guiding open-source dreams through the digital night.</li>
              <li>Google's summer embraced him twice, a feat so divine,</li>
              <li>In the code's symphony, his genius does entwine.</li>
              <li>Cybersecurity's maestro, a guardian of the byte,</li>
              <li>He shields the digital realm, a vigilant knight.</li>
              <li>With keystrokes and passion, he scripts the profound,</li>
              <li>In the vast expanse of Linux, where wisdom is found.</li>
              <li>Baleshwar, a name whispered in code's sacred lore,</li>
              <li>A virtuoso of bits, forever to explore.</li>
              <li></li>
            </ul>
          </div>
        );
        break;

      case "samridth":
        response = (
          <div>
            <ul>
              <li>In the digital tapestry where codes entwine,</li>
              <li>Samridth, the virtuoso, in the binary shrine.</li>
              <li>Ex-vice president, his legacy profound,</li>
              <li>Crafting realms of Linux, where skills abound.</li>
              <li>A web weaver, with keystrokes so deft,</li>
              <li>He crafted the CTF site, where challenges are left.</li>
              <li>The club's heartbeat echoed in his code,</li>
              <li>A symphony of algorithms, gracefully bestowed.</li>
              <li>In the cyber realms, where threats may roam,</li>
              <li>Samridth stands guard, a sentinel in the chrome.</li>
              <li>A developer's dream, his hands create,</li>
              <li>On the web's canvas, he orchestrates fate.</li>
            </ul>
          </div>
        );
        break;

      default:
        response = "Unknown command: " + command;
        break;
    }

    if (response) TerminalService.emit("response", response);
    else TerminalService.emit("clear");
  };

  useEffect(() => {
    TerminalService.on("command", commandHandler);

    return () => {
      TerminalService.off("command", commandHandler);
    };
  }, []);

  return (
    <>
      <Particle />

      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 class="my-5 text-base font-medium tracking-tight text-[#da0404] uppercase">
          <Typewriters
            options={{
              strings: ["Command Line Interface"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p class="max-w-5xl px-5 mt-2 text-3xl font-black leading-tight text-center text-[#da0404] sm:mt-0 sm:px-0 sm:text-5xl">
          Visit every portion of our website with our CLI
        </p>
      </div>
      <p class="max-w-screen-7xl px-5 mt-5 text-xl font-thin leading-tight text-center text-[#da0404] sm:mt-0 sm:px-0 sm:text-xl  ">
        Type "help" for list of commands.
      </p>

      {/* header end */}

      <div className="h-10"></div>
      {/* <div className="card text-gray-700 dark:text-[#da0404]/80"> */}
      <div className="flex justify-center items-start h-[80vh]">
        <Terminal
          welcomeMessage="Welcome to cyberteam Command Line Interface"
          prompt="cyberteam $"
          commandtext="flex-1 shrink grow-0  bg-transparent"
          className=" p-5 font-space w-full lg:w-[60%]  sm:h-[70%] overflow-auto"
          // command= 'text-[#da0404]'
          // response= 'text-[#da0404]'
          pt={{
            root: "bg-[#1A1920] text-[#da0404] border-round",
            prompt: "text-gray-400 mr-2",
            command: "text-primary-300",
            response: "text-primary-300",
            commandText: "outline-none",
          }}
        />
      </div>

      {/* </div> */}
    </>
  );
}

// man - manual remove hekp
// uptime - when club started till now
// fun - fun
//  -tech shows
//
