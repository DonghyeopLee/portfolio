import mochi from "../../assets/mochi.jpg";
import Acchtecture from "../../assets/Server-Side-Architecture.png";
import mochi3 from "../../assets/mochi3.jpg";
import mochi5 from "../../assets/mochi5.png";

export const images = [
    {
      id: 1,
      name: "image_1",
      image: Acchtecture,
      title: "Server-Side Web Application Architecture",
      subtitle: "A Layered Approach to Efficient Web Application",
      description: `
Web Application Layer:
• Contains the database (DB) for data storage and HTML templates for rendering views
• The View Generator retrieves data from the database and combines it with templates to create dynamic web pages

Middleware Layer:
• Acts as an intermediary between the web application and the web server
• The Request Processor handles incoming client requests
• The Context Manager ensures smooth communication and manages session data
• The Response Processor prepares the response to be sent back to the client

Gateway Interface (Web Server):
• Serves as the entry point for client requests
• Processes incoming requests and forwards them to the middleware for further handling

Content Offloading Vector:
• Optimizes content delivery by storing frequently accessed data in a Content Store
• Enhances scalability and performance by reducing the load on the core web application`,
    },
    {
      id: 2,
      name: "image_2",
      image: mochi3,
      title: "Trouble shooting",
      subtitle: "Trouble shooting",
      description: "Trouble shooting",
    },
    {
      id: 3,
      name: "image_3",
      image: mochi,
      title: "Trouble shooting",
      subtitle: "Trouble shooting",
      description: "Trouble shooting",
    }
  ];