import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import { CatEmotionImage } from "components/ExpandableImage";

import atPeace from "images/at-peace.jpg";
import beingEaten from "images/being-eaten.jpg";
import aggravated from "images/cat-aggravated.jpg";
import annoyed from "images/cat-annoyed.jpg";
import contentHappy from "images/cat-content-happy.jpg";
import unimpressed from "images/cat-unimpressed-nonplussed.jpg";
import cuddly from "images/cuddly.jpg";
import destructive from "images/destructive-guilty-uncaring.jpg";
import grumpy from "images/grumpy.jpg";
import happy from "images/happy.jpg";
import mischievous from "images/mischievous.jpg";
import sleepy from "images/sleepy.jpg";
import guilty from "images/surprised-guilty.jpg";
import surprised from "images/surprised.jpg";

export const EmotionSelect = () => {
  // TODO: `useMobileView` (3x3 vs 5x5)
  // TODO: `typeOfCats: real | anime | pixel | cartoon`

  return (
    <Box>
      <Heading>Cat/Emotion Selector</Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} padding={10}>
        <GridItem>
          <CatEmotionImage
            src={atPeace}
            alt="image of a cat on the top of a mountain breathing deeply, seemingly at peace with the world"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={beingEaten}
            alt="image of a cat being gently chomped on by a large dog, the cat appears to not care"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={aggravated}
            alt="image of a cartoon cat sitting akimbo while staring at you with aggravated eyes"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={annoyed}
            alt="image of a cartoon cat rolling it's eyes and appearing to be annoyed at something that was said"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={contentHappy}
            alt="image of a cat sitting upright looking downward at something with a contented face"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={unimpressed}
            alt="image of a cat sitting erect with eyes one quarter closed and an unimpressed face"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={cuddly}
            alt="image of a mother cat curled up and sleeping with it's kitten embraced"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={destructive}
            alt="image of a cat sitting on a completely destroyed chair looking guilty and completely uncaring"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage src={grumpy} alt="image of grumpy cat" />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={happy}
            alt="image of a cat staring into the camera with closed eyes and a happy smile"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={mischievous}
            alt="image of a cat with a paw up and a mischievous smirk on it's face"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={sleepy}
            alt="image of a cat yawning while a human hand scratches it's belly"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={guilty}
            alt="image of a cat laying in a basket looking half-asleep and surprised to see the camera in a guilty sort of way"
          />
        </GridItem>
        <GridItem>
          <CatEmotionImage
            src={surprised}
            alt="image of a cat with both paws up and looking very surprised at the camera"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
