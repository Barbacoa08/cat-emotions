import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useMemo } from "react";

import { CatEmotionImage } from "components/CatEmotionImage";
import { allCatImages } from "images";

import addYourOwn from "images/add-your-own.png";

export const EmotionSelect = () => {
  // TODO: `useMobileView` (3x3 vs 5x5), but CSS
  // TODO: `typeOfCats: real | anime | pixel | cartoon`
  // TODO: search by tags

  const items = useMemo(() => {
    return allCatImages
      .sort(() => Math.random() - 0.5)
      .map(({ alt, src, tags }, i) => (
        <GridItem key={i}>
          <CatEmotionImage alt={alt} src={src} tags={tags} />
        </GridItem>
      ));
  }, []);

  return (
    <Box role="main">
      <Heading as="h1">Cat/Emotion Selector</Heading>

      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        padding={10}
        justifyItems="center"
      >
        {items}
        <GridItem>
          <CatEmotionImage
            alt="if you can't find a cat that represents your current feels, you can click here to add your own"
            src={addYourOwn}
            tags={[]}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
