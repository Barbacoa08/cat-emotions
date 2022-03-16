import { CatEmotionImageProps } from "components/CatEmotionImage";

import anxious from "./anxious.jpg";
import atPeace from "./at-peace.jpg";
import beingEaten from "./being-eaten.jpg";
import cuddly from "./cuddly.jpg";
import destructive from "./destructive-guilty-uncaring.jpg";
import grumpy from "./grumpy.jpg";
import happy from "./happy.jpg";
import mischievous from "./mischievous.jpg";
import sick from "./sick.jpg";
import sickGrumpy from "./sick-grumpy.jpg";
import sleepy from "./sleepy.jpg";
import surprised from "./surprised.jpg";
import surprisedGuilty from "./surprised-guilty.jpg";
import tense from "./tense.jpg";

export const allCatImages: CatEmotionImageProps[] = [
  {
    src: anxious,
    tags: ["anxious", "tense", "scared"],
    alt: "image of a cat mostly curled up and in a corner, appearing to be staring intently at something off camera",
  },
  {
    src: atPeace,
    tags: ["happy", "content"],
    alt: "image of a cat on the top of a mountain breathing deeply, seemingly at peace with the world",
  },
  {
    src: beingEaten,
    tags: ["annoyed", "apathetic"],
    alt: "image of a cat being gently chomped on by a large dog, the cat appears to not care",
  },
  {
    src: cuddly,
    tags: ["cuddly"],
    alt: "image of a mother cat curled up and sleeping with it's kitten embraced",
  },
  {
    src: destructive,
    tags: ["destructive", "angry"],
    alt: "image of a cat sitting on a completely destroyed chair looking guilty and completely uncaring",
  },
  {
    src: grumpy,
    tags: ["grumpy"],
    alt: "image of grumpy cat",
  },
  {
    src: happy,
    tags: ["happy", "smiley"],
    alt: "image of a cat staring into the camera with closed eyes and a happy smile",
  },
  {
    src: mischievous,
    tags: ["mischievous"],
    alt: "image of a cat with a paw up and a mischievous smirk on it's face",
  },
  {
    src: sick,
    tags: ["sick", "pain"],
    alt: "image of a cat sleeping on it's back with a paw on it's face, the other paw holding a thermometer, and a cold compress on it's head",
  },
  {
    src: sickGrumpy,
    tags: ["sick", "grumpy", "sleepy"],
    alt: "image of a grumpy cat sitting up with a cold compress on it's head, a thermometer in it's mouth, and it's tail wrapped around some cough syrup ",
  },
  {
    src: sleepy,
    tags: ["sleepy"],
    alt: "image of a cat yawning while a human hand scratches it's belly",
  },
  {
    src: surprisedGuilty,
    tags: ["guilty"],
    alt: "image of a cat laying in a basket looking half-asleep and surprised to see the camera in a guilty sort of way",
  },
  {
    src: surprised,
    tags: ["surprised"],
    alt: "image of a cat with both paws up and looking very surprised at the camera",
  },
  {
    src: tense,
    tags: ["tense"],
    alt: "image of a cat that is partially crouched and focused, appearing as if it is ready to pounce",
  },
];

export const allTags = Array.from(
  new Set<string>(allCatImages.map(({ tags }) => tags).flat())
);
