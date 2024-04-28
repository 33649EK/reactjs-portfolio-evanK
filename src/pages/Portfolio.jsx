import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  CardFooter,
} from '@chakra-ui/react';

const Project = ({ title, image, altText, link }) => {
  return (
    <div>
      {/* <h2>{title}</h2>
      <a href={link}>
        <img src={image} alt={altText} />
      </a> */}
      <Card maxW="sm">
        <CardBody>
          <Image src={image} alt={altText} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
          </Stack>
        </CardBody>

        <CardFooter>Hello</CardFooter>
      </Card>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: 'TaskMaster',
      image: './images/TaskMasterHome.png',
      altText: 'image of task master application',
      link: 'https://github.com/33649EK/Task-Master',
    },
    {
      title: 'Beat Buddy',
      image: './images/BeatBuddy.png',
      altText: 'image of beat buddy application',
      link: 'https://github.com/33649EK/beat-buddy/deployments/github-pages',
    },
    {
      title: 'FurEver Friends',
      image: './images/FurEver.png',
      altText: 'image of fur ever friends application',
      link: 'https://github.com/davisjeff500/FurEver-Friends',
    },
    {
      title: 'Project Title',
      image: './images/Placeholder.jpg',
      altText: 'placeholder image',
      link: 'https://github.com/33649EK',
    },
    {
      title: 'Project Title',
      image: './images/Placeholder.jpg',
      altText: 'placeholder image',
      link: 'https://github.com/33649EK',
    },
    {
      title: 'Project Title',
      image: './images/Placeholder.jpg',
      altText: 'placeholder image',
      link: 'https://github.com/33649EK',
    },
  ];

  return (
    <>
      <h1>Portfolio</h1>
      <div className="portLinks">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            altText={project.altText}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
