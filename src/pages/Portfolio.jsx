import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Divider,
  CardFooter,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

const Project = ({ title, image, altText, link, tech }) => {
  return (
    <>
      <LinkBox as="article">
        <Card maxW="sm" className="linkCard">
          <Image src={image} alt={altText} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md" className="headerla">
              <LinkOverlay href={link} target="_blank">
                {title}
              </LinkOverlay>
            </Heading>
          </Stack>

          <CardFooter className="cardFooter">{tech}</CardFooter>
        </Card>
      </LinkBox>
    </>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: 'TaskMaster',
      image: './images/TaskMasterHome.png',
      altText: 'image of task master application',
      link: 'https://github.com/33649EK/Task-Master',
      tech: 'React/GraphQL/MongoDB',
    },
    {
      title: 'Beat Buddy',
      image: './images/BeatBuddy.png',
      altText: 'image of beat buddy application',
      link: 'https://github.com/33649EK/beat-buddy/',
      tech: 'Javascript/CSS',
    },
    {
      title: 'FurEver Friends',
      image: './images/FurEver.png',
      altText: 'image of fur ever friends application',
      link: 'https://github.com/davisjeff500/FurEver-Friends',
      tech: 'Handlebars/MySQL',
    },
    // {
    //   title: 'Project Title',
    //   image: './images/Placeholder.jpg',
    //   altText: 'placeholder image',
    //   link: 'https://github.com/33649EK',
    //   tech: 'Placeholder',
    // },
    // {
    //   title: 'Project Title',
    //   image: './images/Placeholder.jpg',
    //   altText: 'placeholder image',
    //   link: 'https://github.com/33649EK',
    //   tech: 'Placeholder',
    // },
    // {
    //   title: 'Project Title',
    //   image: './images/Placeholder.jpg',
    //   altText: 'placeholder image',
    //   link: 'https://github.com/33649EK',
    //   tech: 'Placeholder',
    // },
  ];

  return (
    <>
      <div className="portLinks">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            altText={project.altText}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
