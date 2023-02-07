import Head from "next/head";
import { Heading, Container, Text } from "@chakra-ui/react";
import Button from "../components/Button";
import NasaPhoto from "../components/NasaPhoto";

export default function Home() {
  const today = new Date();
  const formatedDate = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
  });

  return (
    <div>
      <Head>
        <title>Nasa Photo of the Day | Jorge Contreras</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="1080px" textAlign="center">
        <Heading as="h1" size="4xl">
          NASA Photo of the Day
        </Heading>
        <Text>{formatedDate.format(today)}</Text>
        <NasaPhoto />
      </Container>
    </div>
  );
}
