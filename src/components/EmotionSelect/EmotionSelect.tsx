import {
  Box,
  CloseButton,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import fuzzysort from "fuzzysort";
import { useMemo, useState } from "react";

import { CatEmotionImage } from "components/CatEmotionImage";
import { allCatImages } from "images";
import addYourOwn from "images/add-your-own.png";

export const EmotionSelect = () => {
  // TODO: `useMobileView` (3x3 vs 5x5), but CSS
  // TODO: `typeOfCats: real | anime | pixel | cartoon`

  const searchableCatImages = useMemo(
    () =>
      allCatImages.map((catImage) => ({
        ...catImage,
        mergedTags: catImage.tags.join(" "),
      })),
    []
  );

  const [search, setSearch] = useState("");
  const filteredImages = useMemo(
    () =>
      search
        ? fuzzysort
            .go(search, searchableCatImages, {
              key: "mergedTags",
            })
            .map((result) => result.obj)
        : allCatImages,
    [search, searchableCatImages]
  );

  const items = useMemo(
    () =>
      filteredImages
        .map(({ alt, src, tags }, i) => (
          <GridItem key={i}>
            <CatEmotionImage
              alt={alt}
              key={`${i}-${tags.join()}`}
              src={src}
              tags={tags}
            />
          </GridItem>
        ))
        .sort(() => Math.random() - 0.5),
    [filteredImages]
  );

  return (
    <Box role="main">
      <Heading as="h1">Cat/Emotion Selector</Heading>

      <Container>
        <FormControl>
          <FormLabel htmlFor="email">Search Emotions</FormLabel>
          <InputGroup>
            <Input
              type="text"
              placeholder="Type here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <InputRightElement>
              <CloseButton onClick={() => setSearch("")} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Container>

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
